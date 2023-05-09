
import React from "react";
import './tiktactoe.css'
const Tictactoe = () =>{
    const Cell = ()=>{
        return <td> - </td>
    }
    return (
        <div>
           <table>
            <tbody>
                <tr>
                    <Cell />
                    <Cell />
                    <Cell />
                    
                </tr>
                <tr>
                    <Cell />
                    <Cell />
                    <Cell />
                    
                </tr>
                <tr>
                    <Cell />
                    <Cell />
                    <Cell />
                    
                </tr>
            </tbody>
           </table>
        </div>
    );
    
    
};

export default Tictactoe;