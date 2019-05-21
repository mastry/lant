import React from "react";

export interface ICellState {
  row: number;
  column: number;
  color: string;
}

export interface IAntGridProps {
  columns: number;
  rows: number;
  cellPixelWidth: number;
  lineColor: string;
  updateState: () => ICellState
}

export default class AntGrid extends React.Component<IAntGridProps, any> {
  private rootRef: React.RefObject<HTMLDivElement>;
  private canvas: HTMLCanvasElement | null;
  private animateID = 0;

  private readonly LINE_WIDTH = 2;

  constructor(props: IAntGridProps) {
    super(props);
    this.rootRef = React.createRef();
    this.canvas = null;
  }

  componentDidMount() {
    if (null != this.rootRef.current) {
      // Create the canvas
      this.canvas = document.createElement("canvas") as HTMLCanvasElement;
      this.canvas.width = this.calculateCanvasWidth();
      this.canvas.height = this.calculateCanvasHeight();

      // Add the canvas to the root element
      this.rootRef.current.innerHTML = "";
      this.rootRef.current.appendChild(this.canvas);

      // Now we can draw the grid on the canvas
      this.drawGrid();
      this.animateID = window.requestAnimationFrame(this.animate);
    }
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animateID);
  }

  animate = () => {
    const update: ICellState = this.props.updateState();
    this.fillCell(update.row, update.column, update.color);
    this.animateID = window.requestAnimationFrame(this.animate);
  }

  /** Calculates the pixel width of the canvas based on the number of columns requested */
  calculateCanvasWidth() {
    return this.props.columns * this.props.cellPixelWidth +
      this.props.columns * this.LINE_WIDTH +
      this.LINE_WIDTH
  }

  /** Calculates the pixel height of the canvas based on the number of rows requested */
  calculateCanvasHeight() {
    return this.props.rows * this.props.cellPixelWidth +
      this.props.rows * this.LINE_WIDTH +
      this.LINE_WIDTH;
  }

  /** Draws a blank grid on the entire canvas */
  drawGrid() {
    if (null != this.canvas) {
      const drawContext = this.canvas.getContext("2d");
      if (null == drawContext)
        throw Error("Can't get 2D drawing context for canvas.");

      drawContext.lineWidth = this.LINE_WIDTH;
      drawContext.strokeStyle = this.props.lineColor;

      // Draw vertical lines
      for (let column = 0; column <= this.props.columns; column++) {
        const x =
          column * this.props.cellPixelWidth + column * this.LINE_WIDTH + 1;

        drawContext.moveTo(x, 0);
        drawContext.lineTo(x, this.canvas.height - 1);
        drawContext.stroke();
      }

      // Draw horizontal lines
      for (let row = 0; row <= this.props.columns; row++) {
        const y = row * this.props.cellPixelWidth + row * this.LINE_WIDTH + 1;
        drawContext.moveTo(0, y);
        drawContext.lineTo(this.canvas.width - 1, y);
        drawContext.stroke();
      }
    }
  }

  /** Fills the cell at the specified row/column with the a color */
  fillCell(row: number, column: number, color: string) {

    // Don't draw cells that are not visible
    if (row < 0 || column < 0 || row > this.props.rows || column > this.props.columns) {
      return;
    }

    if (null != this.canvas) {
      const [x, y] = this.calculateCellCoords(row, column);

      const drawContext = this.canvas.getContext("2d");
      if (null == drawContext)
        throw Error("Can't get 2D drawing context for canvas");

      drawContext.fillStyle = color;
      drawContext.fillRect(
        x,
        y,
        this.props.cellPixelWidth,
        this.props.cellPixelWidth
      );
    }
  }

  /**  Returns the upper left coordinate of the specified cell */
  calculateCellCoords(row: number, column: number): [number, number] {
    const x =
      column * this.props.cellPixelWidth +
      column * this.LINE_WIDTH +
      this.LINE_WIDTH;

    const y =
      row * this.props.cellPixelWidth +
      row * this.LINE_WIDTH +
      this.LINE_WIDTH;

    return [x, y];
  }

  render() {
    // We render a simple DIV element here and then insert the 
    // canvas in componentDidMount(). We need the ref so we
    // know where to insert the canvas later. See React 
    // docs on ref.
    return <div ref={this.rootRef} />;
  }
}
