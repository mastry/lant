import React from "react";
import { Row, Col, Navbar, NavbarBrand, Container, Button } from "reactstrap";
import AntGrid, { ICellState } from "./antGrid";
import { Ant } from "./ant";
import { LangtonAnt } from "./langtonAnt";
import GridState from "./gridState";
import { Logo } from "../shared/logo";
import Play from "../../images/play.svg"
import Stop from "../../images/stop.svg"

export interface IProps {
  columns: number;
  rows: number;
}

interface IState {
  isRunning: boolean; // true when the simulation is running
}

export class Simulator extends React.Component<IProps, IState> {
  private ant: Ant;

  // The current ant position
  private position: [number, number];

  private gridState: GridState;

  constructor(props: IProps) {
    super(props);

    this.state = { isRunning: false };

    // Create a standard Langton Ant for now (enable runtime customization later)
    this.ant = new LangtonAnt();
    this.gridState = new GridState();
    this.position = this.getStartPosition();
  }

  /** Updates the state of the current cell. Called by AntGrid created in render() */
  updateState = (): ICellState | null => {
    const { isRunning } = this.state;
    if (!isRunning) { return null };

    const state = this.gridState.get(this.position);
    const newState = this.ant.turn(state);

    this.gridState.set(this.position, newState);

    const update = {
      row: this.position[0],
      column: this.position[1],
      color: this.getColorForState(newState)
    };

    this.moveAnt();
    return update;
  }

  /** Returns the position of the ant at the start of the simulation (center of grid) */
  getStartPosition(): [number, number] {
    const row = Math.ceil(this.props.rows / 2);
    const column = Math.ceil(this.props.columns / 2);
    return [row, column];
  }

  getColorForState(state: number): string {
    return state === 0 ? "cyan" : "black";
  }

  moveAnt() {
    switch (this.ant.currentDirection) {
      case 0:
        this.position[1] += 1;
        break;
      case 90:
        this.position[0] += 1;
        break;
      case 180:
        this.position[1] -= 1;
        break;
      default:
        this.position[0] -= 1;
        break;
    }
  }

  handleStartStop = () => {
    const { isRunning } = this.state;
    this.setState({ isRunning: !isRunning });
    console.log(`running: ${this.state.isRunning}`)
  }

  render() {

    const { isRunning } = this.state;

    return (
      <Container className="w100">
        <Row>
          <Col>
            <Navbar dark expand="lg" color="dark" >
              <NavbarBrand href="/" className="mr-4">
                <Logo width={48} height={48} light />Langton's Ant Simulator
              </NavbarBrand>
              <div className="ml-auto">
                <Button color={isRunning ? "danger" : "success"} className="ml-4 mr-1" onClick={() => { this.handleStartStop() }}>
                  <img src={isRunning ? Stop : Play} width={32} height={32} alt="" />
                </Button>
              </div>
            </Navbar>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <AntGrid
              columns={this.props.columns}
              rows={this.props.rows}
              cellPixelWidth={10}
              lineColor="#ccc"
              updateState={this.updateState} />
          </Col>
        </Row>
      </Container>
    );
  }
}
