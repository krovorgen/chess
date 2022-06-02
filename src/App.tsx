import React, { useCallback, useEffect, useState } from 'react';

import { BoardComponent } from './components/BoardComponent';
import { Board } from './models/Board';

import styles from './App.module.scss';

export const App = () => {
  const [board, setBoard] = useState(new Board());

  const restart = useCallback(() => {
    const newBoard = new Board();
    newBoard.initCells();
    setBoard(newBoard);
  }, []);

  useEffect(() => {
    restart();
  }, [restart]);

  return (
    <div className={styles.root}>
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
};
