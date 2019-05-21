import React from "react";
import AntGrid, { ICellState } from "./antGrid";
import { Ant } from "./ant";
import { LangtonAnt } from "./langtonAnt";
import GridState from "./gridState";

export interface IProps {
  columns: number;
  rows: number;
}

export class Simulator extends React.Component<IProps, any> {
  private ant: Ant;

  // The current ant position
  private position: [number, number];

  // A sparse map of current cell states
  private gridState: GridState;

  constructor(props: IProps) {
    super(props);

    // Create a standard Langton Ant for now (enable runtime customization later)
    this.ant = new LangtonAnt();
    this.gridState = new GridState();
    this.position = this.getStartPosition();
  }

  /** Updates the state of the current cell. Called by AntGrid created in render() */
  updateState = (): ICellState => {
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

  render() {
    return (
      <AntGrid
        columns={this.props.columns}
        rows={this.props.rows}
        cellPixelWidth={10}
        lineColor="#ccc"
        updateState={this.updateState} />
    );
  }
}
