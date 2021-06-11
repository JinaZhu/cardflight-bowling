import React, { useState } from 'react';
import Balls from '../Balls/Balls';

function tryParse(value){
    try{
        return JSON.parse(value);
    } catch{
        return value
    }
}

const Frames = (props) => {
    const [frameComplete, setFrameComplete] = useState(false)

    const [frameNum, setFrameNum] = useState({})

    const [gameBoard, setGameBoard] = useState(tryParse(localStorage.getItem('gameBoard')));

    function updateFrameScores(){
        const currGame = gameBoard;

    }

    return(
        <div>
            <table>
                <caption>Enter Score:</caption>
                <tr>
                    <th>&nbsp;</th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                    <th>10</th>
                    <th>TOT</th>
                </tr>
                <tr>
                    <th>User</th>
                </tr>
            </table>
            <Balls/>
        </div>
    )
}

export default Frames;