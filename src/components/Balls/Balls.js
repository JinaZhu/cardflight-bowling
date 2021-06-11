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

    console.log(gameBoard);
    function updateCurrentScore(){
        const currGameScore = gameBoard;
        if (currGameScore.gameScores[currGameScore.position][0] === undefined){
            currGameScore.gameScores[currGameScore.position][0] = ballScore;
        }else{
            const ball1 = parseInt(currGameScore.gameScores[currGameScore.position][0]);
            if (ball1 + ballScore > 10){
                setTooHigh(true);
                console.log(ball1);
                console.log(ballScore);
            } else{
                currGameScore.gameScores[currGameScore.position][1] = ballScore
            }
        }

        if (currGameScore.gameScores[currGameScore.position][1]){
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