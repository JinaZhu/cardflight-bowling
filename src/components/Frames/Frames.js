import React, { useState } from 'react';
import Balls from '../Balls/Balls';

import {
    ScoreTable,
    ScoreTableColumn
} from './styled';

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

    function updateFrameScores(position){
        console.log(gameBoard.gameScores[position]);
        return gameBoard.gameScores[position].reduce((a, b) => a + parseInt(b), 0);
    }

    return(
        <div>
            <ScoreTable>
                <caption>Enter Score:</caption>
                <tr>
                    <th>&nbsp;</th>
                    <ScoreTableColumn>1</ScoreTableColumn>
                    <ScoreTableColumn>2</ScoreTableColumn>
                    <ScoreTableColumn>3</ScoreTableColumn>
                    <ScoreTableColumn>4</ScoreTableColumn>
                    <ScoreTableColumn>5</ScoreTableColumn>
                    <ScoreTableColumn>6</ScoreTableColumn>
                    <ScoreTableColumn>7</ScoreTableColumn>
                    <ScoreTableColumn>8</ScoreTableColumn>
                    <ScoreTableColumn>9</ScoreTableColumn>
                    <ScoreTableColumn>10</ScoreTableColumn>
                    <ScoreTableColumn>TOT</ScoreTableColumn>
                </tr>
                <tr>
                    <ScoreTableColumn>User</ScoreTableColumn>
                    <ScoreTableColumn>{gameBoard.gameScores[0][0]} / {gameBoard.gameScores[0][1]}</ScoreTableColumn>
                    <ScoreTableColumn></ScoreTableColumn>
                    <ScoreTableColumn></ScoreTableColumn>
                    <ScoreTableColumn></ScoreTableColumn>
                    <ScoreTableColumn></ScoreTableColumn>
                    <ScoreTableColumn></ScoreTableColumn>
                    <ScoreTableColumn></ScoreTableColumn>
                    <ScoreTableColumn></ScoreTableColumn>
                    <ScoreTableColumn></ScoreTableColumn>
                    <ScoreTableColumn></ScoreTableColumn>
                    <ScoreTableColumn></ScoreTableColumn>
                </tr>
                <tr>
                <th></th>
                <ScoreTableColumn>{updateFrameScores(1)}</ScoreTableColumn>
                <ScoreTableColumn></ScoreTableColumn>
                <ScoreTableColumn></ScoreTableColumn>
                <ScoreTableColumn></ScoreTableColumn>
                <ScoreTableColumn></ScoreTableColumn>
                <ScoreTableColumn></ScoreTableColumn>
                <ScoreTableColumn></ScoreTableColumn>
                <ScoreTableColumn></ScoreTableColumn>
                <ScoreTableColumn></ScoreTableColumn>
                <ScoreTableColumn></ScoreTableColumn>
                </tr>
            </ScoreTable>
            <Balls/>
        </div>
    )
}

export default Frames;