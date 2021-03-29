import React from 'react';
import Circle from './Circle';
import Cross from './Cross';
// import { EMPTY, CIRCLE, CROSS } from './TicTacToe';

function Square({position, value, takeTurn}) {
    function handleClick() {
        if (value === "EMPTY") return takeTurn(position);
      };

      return (
        <div className="square" position={position} onClick={handleClick} >
          {value === "CIRCLE" && <Circle />}
          {value === "CROSS" && <Cross />}
        </div>
      );
}
 
export default Square;