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

  //** The current row and column of the ant */
  position: Coordinate;
}

export class Simulator extends React.Component<IProps, IState> {
  private ant: Ant;

  private gridState: GridState;

  constructor(props: IProps) {
    super(props);

    // Create a standard Langton Ant for now (enable runtime customization later)
    this.ant = new LangtonAnt();
    this.gridState = new GridState();

    this.state = {
      isRunning: false,
      elapsed: 0,
      position: this.getStartPosition()
    };
  }

  /** Updates the state of the current cell. Called by AntGrid created in render() */
  updateState = (): Array<ICellState> | null => {
    if (!this.state.isRunning) {
      return null;
    }

    // The ant modifies the state of the cell it is leaving
    const { position } = this.state;
    const state = this.gridState.get(position);
    const newState = this.ant.turn(state);
    this.gridState.set(position, newState);

    // We want to update the color of the cell the ant is leaving
    const previousCell = {
      row: position.row,
      column: position.column,
      color: this.getColorForState(newState)
    };

    this.moveAnt();

    // We also want to set the color of the cell that the ant has moved to
    const newPosition = this.state.position;
    const antCell = {
      row: newPosition.row,
      column: newPosition.column,
      color: "red"
    };

    return [previousCell, antCell];
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
    var { position } = this.state;

    switch (this.ant.currentDirection) {
      case 0:
        position.column += 1;
        break;
      case 90:
        position.row += 1;
        break;
      case 180:
        position.column -= 1;
        break;
      default:
        position.row -= 1;
        break;
    }

    this.setState({ elapsed: this.state.elapsed + 1, position: position });
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
