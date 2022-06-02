import { Colors } from './Colors';
import { Figure } from './figures/Figure';
import { Board } from './Board';

export class Cell {
  public available: boolean = false; // is it possible to move
  public id: number = Math.random(); // for react key
  constructor(
    public board: Board,
    readonly x: number,
    readonly y: number,
    readonly color: Colors,
    public figure: Figure | null,
  ) {}

  moveFigure(target: Cell) {
    if (this.figure?.canMove(target)) {
      this.figure?.moveFigure(target);
      target.figure = this.figure;
      this.figure = null;
    }
  }
}
