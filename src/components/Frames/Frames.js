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
    const [gameBoard, setGameBoard] = useState(tryParse(localStorage.getItem('gameBoard')));
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
                    <ScoreTableColumn>BONUS</ScoreTableColumn>
                    <ScoreTableColumn>TOT</ScoreTableColumn>
                </tr>
                <tr>
                    <ScoreTableColumn>User</ScoreTableColumn>
                    {console.log('gameBoard.gameScores', gameBoard.gameScores)}
                    <ScoreTableColumn>{gameBoard.gameScores[0][0]}/{gameBoard.gameScores[0][1]}</ScoreTableColumn>
                    <ScoreTableColumn>{gameBoard.gameScores[1][0]}/{gameBoard.gameScores[1][1]}</ScoreTableColumn>
                    <ScoreTableColumn>{gameBoard.gameScores[2][0]}/{gameBoard.gameScores[2][1]}</ScoreTableColumn>
                    <ScoreTableColumn>{gameBoard.gameScores[3][0]}/{gameBoard.gameScores[3][1]}</ScoreTableColumn>
                    <ScoreTableColumn>{gameBoard.gameScores[4][0]}/{gameBoard.gameScores[4][1]}</ScoreTableColumn>
                    <ScoreTableColumn>{gameBoard.gameScores[5][0]}/{gameBoard.gameScores[5][1]}</ScoreTableColumn>
                    <ScoreTableColumn>{gameBoard.gameScores[6][0]}/{gameBoard.gameScores[6][1]}</ScoreTableColumn>
                    <ScoreTableColumn>{gameBoard.gameScores[7][0]}/{gameBoard.gameScores[7][1]}</ScoreTableColumn>
                    <ScoreTableColumn>{gameBoard.gameScores[8][0]}/{gameBoard.gameScores[8][1]}</ScoreTableColumn>
                    <ScoreTableColumn>{gameBoard.gameScores[9][0]}/{gameBoard.gameScores[9][1]}</ScoreTableColumn>
                    <ScoreTableColumn>{gameBoard.gameScores[10][0]}/{gameBoard.gameScores[10][1]}</ScoreTableColumn>
                    <ScoreTableColumn>{gameBoard.frameScore[10]}</ScoreTableColumn>
                </tr>
                <tr>
                <th></th>
                <ScoreTableColumn>{gameBoard.frameScore[0]}</ScoreTableColumn>
                <ScoreTableColumn>{gameBoard.frameScore[1]}</ScoreTableColumn>
                <ScoreTableColumn>{gameBoard.frameScore[2]}</ScoreTableColumn>
                <ScoreTableColumn>{gameBoard.frameScore[3]}</ScoreTableColumn>
                <ScoreTableColumn>{gameBoard.frameScore[4]}</ScoreTableColumn>
                <ScoreTableColumn>{gameBoard.frameScore[5]}</ScoreTableColumn>
                <ScoreTableColumn>{gameBoard.frameScore[6]}</ScoreTableColumn>
                <ScoreTableColumn>{gameBoard.frameScore[7]}</ScoreTableColumn>
                <ScoreTableColumn>{gameBoard.frameScore[8]}</ScoreTableColumn>
                <ScoreTableColumn>{gameBoard.frameScore[9]}</ScoreTableColumn>
                <ScoreTableColumn>{gameBoard.frameScore[10]}</ScoreTableColumn>
                </tr>
            </ScoreTable>
            <Balls setGameBoard={setGameBoard} gameBoard={gameBoard}/>
        </div>
    )
}

export default Frames;