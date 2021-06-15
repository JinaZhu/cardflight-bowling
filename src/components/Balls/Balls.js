import React, { useState } from 'react';
import {
    InputContainer,
    InputBox,
    InputButton,
} from './styled';

const Balls = ({setGameBoard, gameBoard}) => {
    const [tooHigh, setTooHigh] = useState(false);

    function sumScore(currGameScore){
        const score1 = currGameScore.gameScores[currGameScore.position][0];
        const score2 = currGameScore.gameScores[currGameScore.position][1];
        const currFrameRolls = [score1, score2];
        const prevFrame = currGameScore.gameScores[currGameScore.position - 1];
        const currFrame = currGameScore.frameScore;
        let totalFrameScore = currFrameRolls.reduce((acc, score) => {
            acc += parseInt(score);
            return acc
        }, 0);
        if (totalFrameScore === 10){
            currGameScore.gameScores[currGameScore.position][0] = 10;
            currGameScore.gameScores[currGameScore.position][1] = 0;
            currGameScore.spare = true;            
        }
        if (prevFrame){
            totalFrameScore += currGameScore.frameScore[currGameScore.position - 1];
        }
        console.log('totalFrameScore', totalFrameScore);
        currFrame.push(totalFrameScore);
        return currGameScore;
    }

    function isStrike(position, currGameScore){
        const score1 = currGameScore.gameScores[currGameScore.position][0];
        const score2 = currGameScore.gameScores[currGameScore.position][1];
        const prevFrameScore = currGameScore.frameScore[position - 1];
        const newPrevFrameScore = prevFrameScore + score1 + score2;
        currGameScore.frameScore[position - 1] = newPrevFrameScore;
        currGameScore.frameScore[position] = newPrevFrameScore + score1 + score2;
        currGameScore.strike = false;
        return currGameScore;
    }

    function isSpare(position, currGameScore){
        const score1 = currGameScore.gameScores[currGameScore.position][0];
        const prevFrameScore = currGameScore.frameScore[position - 1];
        const newPrevFrameScore = prevFrameScore + score1;
        currGameScore.frameScore[position - 1] = newPrevFrameScore;
        currGameScore.spare = false;
        return currGameScore;
    }

    function updateCurrentScore(){
        let currGameScore = {...gameBoard};
        if (currGameScore.gameScores[currGameScore.position][0] === undefined){
            if (ballScore === 10){
                currGameScore.gameScores[currGameScore.position][0] = 10;
                currGameScore.gameScores[currGameScore.position][1] = 0;
                currGameScore.strike = true;
                currGameScore = sumScore(currGameScore);
            } else{
                currGameScore.gameScores[currGameScore.position][0] = ballScore;
                if (currGameScore.spare === true){
                    currGameScore = isSpare(currGameScore.position, currGameScore);
                }
            }
        }else{
            const ball1 = parseInt(currGameScore.gameScores[currGameScore.position][0]);
            if ((ball1 + ballScore) > 10){
                setTooHigh(true);
                return
            } else{
                currGameScore.gameScores[currGameScore.position][1] = ballScore
            }
            currGameScore = sumScore(currGameScore);
            if (currGameScore.strike === true){
                currGameScore = isStrike(currGameScore.position, currGameScore);
            }
            setGameBoard(currGameScore);
            localStorage.setItem('gameBoard', JSON.stringify(gameBoard));
        }
        if (currGameScore.gameScores[currGameScore.position][1] || currGameScore.gameScores[currGameScore.position][1] === 0){
            currGameScore.position += 1;
        }
        setGameBoard(currGameScore);
        localStorage.setItem('gameBoard', JSON.stringify(currGameScore));

        if (currGameScore.position === 9){
            if(currGameScore.strike === true){
                currGameScore = isStrike(currGameScore.position, currGameScore);
                setGameBoard(currGameScore);
                localStorage.setItem('gameBoard', JSON.stringify(gameBoard));
                return
            }
            if (currGameScore.spare === true){
                currGameScore = isSpare(currGameScore.position, currGameScore);
                setGameBoard(currGameScore);
                localStorage.setItem('gameBoard', JSON.stringify(gameBoard));
                return
            }
        }
    }

    // saves default ball score to local storage
    const [ballScore, setBallScore] = useState("");
    
    const onChange = event => {
        if(tooHigh === true){
            event.preventDefault();
        }
        setTooHigh(false);
        setBallScore(parseInt(event.target.value));
    }

    return(
        <InputContainer>
            <InputBox value={ballScore} type='number' onChange={onChange} name='score' min='0' max='10'/>
            {tooHigh && 
            <p>
                input too high
            </p>
            }
            <InputButton onClick={updateCurrentScore}>
                submit
            </InputButton>
        </InputContainer>
    )
}

export default Balls;