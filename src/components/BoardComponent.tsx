import React, { FC, Fragment } from 'react';

import styles from '../App.module.scss';
import { Board } from '../models/Board';
import { CellComponent } from './CellComponent';

type BoardComponentProps = {
  board: Board;
  setBoard: (board: Board) => void;
};

export const BoardComponent: FC<BoardComponentProps> = ({ board, setBoard }) => {
  return (
    <div className={styles.board}>
      {board.cells.map((row, index) => (
        <Fragment key={index}>
          {row.map((cell) => (
            <CellComponent key={cell.id} cell={cell} />
          ))}
        </Fragment>
      ))}
    </div>
  );
};
