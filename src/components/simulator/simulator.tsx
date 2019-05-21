import React from "react";
import AntGrid, { ICellState } from "./antGrid";

export interface ISimulatorProps {
  width: number;
  height: number;
}

export class Simulator extends React.Component<any, any> {
  private turn = 0;

  constructor(props: any) {
    super(props);
  }

  updateState = (): ICellState[] => {
    return [
      { row: 37, column: 50, color: "red" }
    ];
  }

  render() {
    return (
      <AntGrid columns={100} rows={75} cellPixelWidth={10} lineColor="#ccc" updateState={this.updateState} />
    );
  }
}
