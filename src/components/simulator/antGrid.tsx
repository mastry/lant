import React from "react";

export interface IAntGridProps {
  columns: number;
  rows: number;
  cellPixelWidth: number;
  lineColor: string;
}

export default class AntGrid extends React.Component<IAntGridProps, any> {
  private rootRef: React.RefObject<HTMLDivElement>;
  private canvas: HTMLCanvasElement | null;

  private readonly LINE_WIDTH = 2;

  constructor(props: IAntGridProps) {
    super(props);
    this.rootRef = React.createRef();
    this.canvas = null;
  }

  componentDidMount() {
    if (null != this.rootRef.current) {
      this.canvas = document.createElement("canvas") as HTMLCanvasElement;
      this.canvas.width = this.calculateCanvasWidth();
      this.canvas.height = this.calculateCanvasHeight();

      // Add the canvas to the root element
      this.rootRef.current.innerHTML = "";
      this.rootRef.current.appendChild(this.canvas);
      this.drawGrid(); this.calculateCanvasHeight();
    }
  }

  calculateCanvasWidth() {
    return this.props.columns * this.props.cellPixelWidth +
      this.props.columns * this.LINE_WIDTH +
      this.LINE_WIDTH
  }

  calculateCanvasHeight() {
    return this.props.rows * this.props.cellPixelWidth +
      this.props.rows * this.LINE_WIDTH +
      this.LINE_WIDTH;
  }

  drawGrid() {
    if (null != this.canvas) {
      const drawContext = this.canvas.getContext("2d");
      if (null == drawContext)
        throw Error("Can't get 2D drawing context for canvas.");

      drawContext.lineWidth = this.LINE_WIDTH;
      drawContext.strokeStyle = this.props.lineColor;

      for (let column = 0; column <= this.props.columns; column++) {
        const x =
          column * this.props.cellPixelWidth + column * this.LINE_WIDTH + 1;

        drawContext.moveTo(x, 0);
        drawContext.lineTo(x, this.canvas.height - 1);
        drawContext.stroke();
      }

      for (let row = 0; row <= this.props.columns; row++) {
        const y = row * this.props.cellPixelWidth + row * this.LINE_WIDTH + 1;
        drawContext.moveTo(0, y);
        drawContext.lineTo(this.canvas.width - 1, y);
        drawContext.stroke();
      }
    }
  }

  render() {
    return <div ref={this.rootRef} />;
  }
}
