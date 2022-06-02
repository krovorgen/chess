import React, { FC, Fragment, memo, useMemo } from 'react';

import { Board } from '../models/Board';
import { CellComponent } from './CellComponent';

import styles from '../App.module.scss';

type BoardComponentProps = {
  board: Board;
  setBoard: (board: Board) => void;
};

export const BoardComponent: FC<BoardComponentProps> = memo(({ board, setBoard }) => {
  const memoBoard = useMemo(
    () =>
      board.cells.map((row, index) => (
        <Fragment key={index}>
          {row.map((cell) => (
            <CellComponent key={cell.id} cell={cell} />
          ))}
        </Fragment>
      )),
    [board],
  );

  return <div className={styles.board}>{memoBoard}</div>;
});
