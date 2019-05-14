import React from "react";

export interface IAntGridProps {
  columns: number;
  rows: number;
  cellPixelWidth: number;
  lineColor: string;
}

export default class AntGrid extends React.Component<IAntGridProps, any> {
  private element: React.RefObject<HTMLDivElement>;
  private canvas: HTMLCanvasElement | null;

  private readonly LINE_WIDTH = 2;

  constructor(props: IAntGridProps) {
    super(props);
    this.element = React.createRef();
    this.canvas = null;
  }

  componentDidMount() {
    if (null != this.element.current) {
      this.canvas = document.createElement("canvas") as HTMLCanvasElement;
      this.canvas.width =
        this.props.columns * this.props.cellPixelWidth +
        this.props.columns * this.LINE_WIDTH +
        this.LINE_WIDTH;
      this.canvas.height =
        this.props.rows * this.props.cellPixelWidth +
        this.props.rows * this.LINE_WIDTH +
        this.LINE_WIDTH;
      this.element.current.innerHTML = "";
      this.element.current.appendChild(this.canvas);
      this.drawGrid();
    }
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
    return <div ref={this.element} />;
  }
}
