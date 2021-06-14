import React from 'react';
import {
    LandingButton
} from './styled';

const gameBoard = {
    gameScores: [ [], [], [], [], [], [], [], [], [], [] , [] ],
    position: 0,
    frameScore: [],
    strike: false,
    spare: false,
}

const Landing = ({setStartGame}) => {
    const onClick = () => {
        localStorage.setItem('startGame', true);
        localStorage.setItem('gameBoard', JSON.stringify(gameBoard));
        setStartGame(true);
    }

    return(
        <LandingButton onClick={onClick}>
            Let's Start Bowling!
        </LandingButton>
    )
}

export default Landing;