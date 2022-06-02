import React, { FC, memo } from 'react';
import cn from 'classnames';

import { Cell } from '../models/Cell';

import styles from '../App.module.scss';

type CellComponentProps = {
  cell: Cell;
};

export const CellComponent: FC<CellComponentProps> = memo(({ cell }) => {
  return (
    <div className={cn(styles.cell, styles[cell.color])}>
      {cell.figure?.logo && (
        <img src={cell.figure?.logo} alt={cell.figure.name} width={48} height={48} />
      )}
    </div>
  );
});
