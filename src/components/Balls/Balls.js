import React, { useState } from 'react';

function tryParse(value){
    try{
        return JSON.parse(value);
    } catch{
        return value
    }
}

const Balls = (props) => {
    const [gameBoard, setGameBoard] = useState(tryParse(localStorage.getItem('gameBoard')));
    const [tooHigh, setTooHigh] = useState(false);

    function sumScore(currGameScore){
        const score1 = currGameScore.gameScores[currGameScore.position][0];
        const score2 = currGameScore.gameScores[currGameScore.position][1];
        const frame = [score1, score2];
        const currFrame = currGameScore.frameScore;
        const totalFrameScore = frame.reduce((acc, score) => {
            acc += parseInt(score)
            return acc
        }, 0)
        console.log('totalFrameScore', totalFrameScore);
        currFrame.push(totalFrameScore);
        return currGameScore;
    }

    function isStrike(position, currGameScore){
        const score1 = currGameScore.gameScores[currGameScore.position][0];
        const score2 = currGameScore.gameScores[currGameScore.position][1];
        const prevFrameScore = currGameScore.frameScore[position - 1];
        const newPrevFrameScore = prevFrameScore + score1 + score2;
        console.log('position', position)
        currGameScore.frameScore[position - 1] = newPrevFrameScore;
        currGameScore.strike = false;
        return currGameScore;
    }

    function updateCurrentScore(){
        let currGameScore = gameBoard;
        if (currGameScore.gameScores[currGameScore.position][0] === undefined){
            if (ballScore === 10){
                currGameScore.gameScores[currGameScore.position][0] = 10;
                currGameScore.gameScores[currGameScore.position][1] = 0;
                currGameScore.strike = true;
                currGameScore = sumScore(currGameScore);
            } else{
                currGameScore.gameScores[currGameScore.position][0] = ballScore;
            }
        }else{
            const ball1 = parseInt(currGameScore.gameScores[currGameScore.position][0]);
            if ((ball1 + ballScore) > 10){
                setTooHigh(true);
                console.log(ball1);
                console.log(ballScore);
            } else{
                currGameScore.gameScores[currGameScore.position][1] = ballScore
            }
            if (currGameScore.strike === true){
                currGameScore = isStrike(currGameScore.position, currGameScore);
            }
            currGameScore = sumScore(currGameScore);
            setGameBoard(currGameScore);
            localStorage.setItem('gameBoard', JSON.stringify(gameBoard));
        }
        if (currGameScore.gameScores[currGameScore.position][1] || currGameScore.gameScores[currGameScore.position][1] === 0){
            console.log('hello')
            currGameScore.position += 1;
        }
        setGameBoard(currGameScore);
        localStorage.setItem('gameBoard', JSON.stringify(currGameScore));
    }

    // saves default ball score to local storage
    const [ballScore, setBallScore] = useState("");
    
    const onChange = event => {
        setTooHigh(false);
        setBallScore(parseInt(event.target.value));
    }

    return(
        <div>
            <input value={ballScore} type='number' onChange={onChange} name='score' min='0' max='10'/>
            {tooHigh && 
            <p>
                input too high
            </p>
            }
            <button onClick={updateCurrentScore}>
                submit
            </button>
        </div>
    )
}

export default Balls;