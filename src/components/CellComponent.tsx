import React, { FC, memo } from 'react';
import cn from 'classnames';

import { Cell } from '../models/Cell';

import styles from '../App.module.scss';

type CellComponentProps = {
  cell: Cell;
  selected: boolean;
  onClickCell: (cell: Cell) => void;
};

export const CellComponent: FC<CellComponentProps> = memo(({ cell, selected, onClickCell }) => {
  return (
    <div
      className={cn(styles.cell, styles[cell.color], {
        [styles.selected]: selected,
        [styles.attack]: cell.available && cell.figure,
      })}
      onClick={() => onClickCell(cell)}>
      {cell.available && !cell.figure && <div className={styles.available} />}
      {cell.figure?.logo && (
        <img src={cell.figure?.logo} alt={cell.figure.name} width={48} height={48} />
      )}
    </div>
  );
});
