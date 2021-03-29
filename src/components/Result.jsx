import React from 'react';
// import { CIRCLE, CROSS } from './TicTacToe';

const Result = ( { winner, reset } ) => {
    return (
        <div className="result">
          {winner === "CIRCLE" && "Circle won the game"}
          {winner === "CROSS" && "Cross won the game"}
          {winner === "It's a tie" && "It's a tie"}
          <button onClick={reset} >RESET</button>
        </div>
      );
}
 
export default Result;