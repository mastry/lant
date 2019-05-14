import React from "react";
import AntGrid from "./antGrid";

export interface ISimulatorProps {
  width: number;
  height: number;
}

export class Simulator extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <AntGrid columns={100} rows={75} cellPixelWidth={10} lineColor="#ccc" />
    );
  }
}
