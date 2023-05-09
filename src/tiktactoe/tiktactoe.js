import React, { useState } from "react";
import './tiktactoe.css'

const Tictactoe = () => {
  const [turn, setTurn] = useState('x');
  const [cells, setCells] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState('');
  const [moves, setMoves] = useState(0);

  const checkWinner = (squares) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ]
    };

    for (let combo of Object.values(combos)) {
      combo.forEach((pattern) => {
        if (
          squares[pattern[0]] === '' ||
          squares[pattern[1]] === '' ||
          squares[pattern[2]] === ''
        ) {
          // Do something if any of the squares in the pattern is empty
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setWinner(squares[pattern[0]]);
        }
      });
    }
  };

  const handleRestart = () => {
    setWinner('');
    setCells(Array(9).fill(''));
    setMoves(0);
  };

  const handleClick = (num) => {
    if (cells[num] !== '') {
      alert('Already clicked');
      return;
    }

    let squares = [...cells];
    if (turn === 'x') {
      squares[num] = 'x';
      setTurn('o');
    } else {
      squares[num] = 'o';
      setTurn('x');
    }
    setCells(squares);
    setMoves(prevMoves => prevMoves + 1);

    checkWinner(squares); // Check for a winner after each move
  };

  const Cell = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
  };

  // Check for a tie game
  if (moves === 9 && !winner) {
    return (
      <div className='container'>
        <table>
          <tbody>
            <tr>
              <Cell num={0} />
              <Cell num={1} />
              <Cell num={2} />
            </tr>
            <tr>
              <Cell num={3} />
              <Cell num={4} />
              <Cell num={5} />
            </tr>
            <tr>
              <Cell num={6} />
              <Cell num={7} />
              <Cell num={8} />
            </tr>
          </tbody>
        </table>
        <p>It's a tie!</p>
        <button onClick={handleRestart}>Play Again</button>
      </div>
    );
  }

  return (
    <div className='container'>
      <table>
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
      {winner && (
        <>
          <p>{winner} is the winner</p>
          <button onClick={handleRestart}>Play Again</button>
        </>
      )}
    </div>
  );
};

export default Tictactoe;

