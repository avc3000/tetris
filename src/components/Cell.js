import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

// React.memo se asegura que solo volvamos a renderizar las celdas modificadas
const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color}></StyledCell>
);

export default React.memo(Cell);