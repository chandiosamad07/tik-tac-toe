
import React, { useState } from "react";
import './tiktactoe.css'
const Tictactoe = () =>{
    const [turn, setTurn] = useState('x')
    const [cells,setCells]=useState(Array(9).fill(''));
    const [winner , serWinner] = useState();
    const checkWinner = (squares) =>{
        let combos = {
          across:[
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            ],
          down:[
                [0, 3, 6],
                [3, 4, 5],
                [2, 5, 8],
                ],
      diagnol:[
            [0, 3, 6],
            [2, 4, 6],
            
            ]
            
        };

        for(let combo in combos){
            combos[combo].forEach((pattern) => {
                if(squares[pattern[0]] === ''||
                squares[pattern[1]] === ''||
                squares[pattern[2]] === ''
                    ){

                    }
                else if (
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]] 
                ){
                        serWinner( squares[pattern[0]] )
                }
            });
        }
    }

    const handleClick = (num) =>{   
        if(cells[num]!==''){
            alert('already Clicked')
        }
        
        let squares = [...cells];    
        if(turn === 'x'){
            squares[num]='x'
            setTurn('o');
        }
        else{
            squares[num]='o'
            setTurn('x');
        }
        setCells(squares);
    };
    const Cell = ({num})=>{
        return <td onClick={()=>handleClick(num)}>{cells[num]} - </td>
    }
    return (
        <div className = 'container'> 
           <table>
            Turn:{turn}
            <tbody>
                <tr>
                    <Cell num={0} />
                    <Cell num={1} />
                    <Cell num={2} />
                    
                </tr>
                <tr>
                    <Cell num={4} />
                    <Cell num={5} />
                    <Cell num={6} />
                    
                </tr>
                <tr>
                    <Cell num={7} />
                    <Cell num={8} />
                    <Cell num={9} />
                    
                </tr>
            </tbody>
           </table>
           {winner &&(
            <>
            <p>{winner} is the winner </p>
            <button>Play Again</button>
            </>
           )}
        </div>
    );
    
    
};

export default Tictactoe;