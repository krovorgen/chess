import React, { useEffect, useState } from 'react';

import styles from './App.module.scss';
import { BoardComponent } from './components/BoardComponent';
import { Board } from './models/Board';

export const App = () => {
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    restart();
  }, []);

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    setBoard(newBoard);
  };

  return (
    <div className={styles.root}>
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
};
