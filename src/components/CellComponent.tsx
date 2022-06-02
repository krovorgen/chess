import React, { FC } from 'react';
import cn from 'classnames';

import styles from '../App.module.scss';
import { Cell } from '../models/Cell';

type CellComponentProps = {
  cell: Cell;
};

export const CellComponent: FC<CellComponentProps> = ({ cell }) => {
  return <div className={cn(styles.cell, styles[cell.color])}></div>;
};
