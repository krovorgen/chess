import { Colors } from '../Colors';
import logo from '../../assets/black-bishop.png';
import { Cell } from '../Cell';

export enum FigureNames {
  FIGURE = 'Фигура',
  PAWN = 'Пешка',
  KING = 'Король',
  KNIGHT = 'Конь',
  QUEEN = 'Ферзь',
  ROOK = 'Ладья',
  BISHOP = 'Слон',
}

export class Figure {
  public logo: typeof logo | null = null;
  public name: FigureNames = FigureNames.FIGURE;
  public id: number = Math.random();

  constructor(public color: Colors, public cell: Cell) {
    this.cell.figure = this;
  }

  canMove(target: Cell): boolean {
    if (target.figure?.color === this.color) return false;
    if (target.figure?.name === FigureNames.KING) return false;
    return true;
  }

  moveFigure(target: Cell) {}
}
