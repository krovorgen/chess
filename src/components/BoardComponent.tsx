import React, { FC, Fragment, memo, useEffect, useState } from 'react';

import { Board } from '../models/Board';
import { CellComponent } from './CellComponent';
import { Cell } from '../models/Cell';

import styles from '../App.module.scss';

type BoardComponentProps = {
  board: Board;
  setBoard: (board: Board) => void;
};

export const BoardComponent: FC<BoardComponentProps> = memo(({ board, setBoard }) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  const onClickCell = (cell: Cell) => {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
    } else {
      setSelectedCell(cell);
    }
  };

  const updateBoard = () => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  };

  useEffect(() => {
    highlightCells();
  }, [selectedCell]);

  const highlightCells = () => {
    board.highlightCells(selectedCell);
    updateBoard();
  };

  return (
    <div className={styles.board}>
      {board.cells.map((row, index) => (
        <Fragment key={index}>
          {row.map((cell) => (
            <CellComponent
              key={cell.id}
              onClickCell={onClickCell}
              cell={cell}
              selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
            />
          ))}
        </Fragment>
      ))}
    </div>
  );
});
