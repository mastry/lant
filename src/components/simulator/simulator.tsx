import React from "react";
import { Row, Col, Container, Button, Badge } from "reactstrap";
import AntGrid, { ICellState } from "./antGrid";
import { Ant } from "./ant";
import { LangtonAnt } from "./langtonAnt";
import GridState from "./gridState";
import AntBar from "../shared/antBar";
import Play from "../../images/play.svg";
import Stop from "../../images/stop.svg";
import Coordinate from "./coordinate";

export interface IProps {
  columns: number;
  rows: number;
}

interface IState {
  /** True only when the simulation is running */
  isRunning: boolean;

  /** The number of turns that have elapssed in the simulation */
  elapsed: number;
}

export class Simulator extends React.Component<IProps, IState> {
  private ant: Ant;

  // The current ant position
  private position: Coordinate;

  private gridState: GridState;

  constructor(props: IProps) {
    super(props);

    this.state = { isRunning: false, elapsed: 0 };

    // Create a standard Langton Ant for now (enable runtime customization later)
    this.ant = new LangtonAnt();
    this.gridState = new GridState();
    this.position = this.getStartPosition();
  }

  /** Updates the state of the current cell. Called by AntGrid created in render() */
  updateState = (): ICellState | null => {
    if (!this.state.isRunning) {
      return null;
    }

    const state = this.gridState.get(this.position);
    const newState = this.ant.turn(state);

    this.gridState.set(this.position, newState);

    const cellState = {
      row: this.position.row,
      column: this.position.column,
      color: this.getColorForState(newState)
    };

    this.moveAnt();
    return cellState;
  };

  /** Returns the position of the ant at the start of the simulation (center of grid) */
  getStartPosition(): Coordinate {
    const row = Math.ceil(this.props.rows / 2);
    const column = Math.ceil(this.props.columns / 2);
    return new Coordinate(row, column);
  }

  getColorForState(state: number): string {
    return state === 0 ? "cyan" : "black";
  }

  moveAnt() {
    switch (this.ant.currentDirection) {
      case 0:
        this.position.column += 1;
        break;
      case 90:
        this.position.row += 1;
        break;
      case 180:
        this.position.column -= 1;
        break;
      default:
        this.position.row -= 1;
        break;
    }

    this.setState({ elapsed: this.state.elapsed + 1 });
  }

  handleStartStop = () => {
    const { isRunning } = this.state;
    this.setState({ isRunning: !isRunning });
  };

  render() {
    const { isRunning } = this.state;

    return (
      <Container className="w100">
        <AntBar title="Simulator">
          <Badge color="primary">{this.state.elapsed}</Badge>
          <Button
            color={isRunning ? "danger" : "success"}
            className="ml-4 mr-1"
            onClick={() => {
              this.handleStartStop();
            }}
          >
            <img src={isRunning ? Stop : Play} width={32} height={32} alt="" />
          </Button>
        </AntBar>

        <Row className="mt-3">
          <Col>
            <AntGrid
              columns={this.props.columns}
              rows={this.props.rows}
              cellPixelWidth={10}
              lineColor="#ccc"
              updateState={this.updateState}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
