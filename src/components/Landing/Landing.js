import React from 'react';

const gameBoard = {
    gameScores: [ [], [], [], [], [], [], [], [], [], [] ],
    position: 0,
    frameScore: [],
    strike: false,
    spare: false,
    bonusRolls: 0,
}

const Landing = ({setStartGame}) => {
    const onClick = () => {
        localStorage.setItem('startGame', true);
        localStorage.setItem('gameBoard', JSON.stringify(gameBoard));
        setStartGame(true);
    }

    return(
        <button onClick={onClick}>
            start game
        </button>
    )
}

export default Landing;