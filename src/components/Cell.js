import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => (
    <StyledCell type={type} color={TETROMINOS[type].color}>{console.log('rerender')}</StyledCell>
);

// memoizes each event and only re-renders when the cells are changing
export default React.memo(Cell);