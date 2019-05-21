export enum AntGene {
  L,
  R
}

export class Ant {
  private _currentDirection: number;
  private readonly turnAngle: number;
  private readonly genome: AntGene[];

  constructor(turnAngle: number, genome: AntGene[]) {
    if (turnAngle <= 0 || turnAngle >= 360) {
      throw Error("Ant turnAngle must be between 0 and 360 (exclusive).");
    }

    this._currentDirection = 0;
    this.turnAngle = turnAngle;
    this.genome = genome;
  }

  public turn(state: number): number {
    const index = (state + 1) % this.genome.length;
    if (this.genome[index] === AntGene.L) {
      this.turnLeft();
    } else {
      this.turnRight();
    }

    return index;
  }

  public get currentDirection() {
    return this._currentDirection;
  }

  private turnLeft() {
    this._currentDirection -= this.turnAngle;
    if (this._currentDirection < 0) {
      this._currentDirection += 360;
    }
    this._currentDirection %= 360;
  }

  private turnRight() {
    this._currentDirection += this.turnAngle;
    this._currentDirection %= 360;
  }
}
