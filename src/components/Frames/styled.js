import styled from 'styled-components';

export const ScoreTable = styled.table`
    height: 40vh;
    width: 90vw;
    border: 1px solid black;
    background-color: black;
    font-family: W95FA;
`;

export const ScoreTableColumn = styled.th`
    border: outset 1px black;
    width: 100px;
`;

export const FrameNum = styled.th`
    border: outset black 1px;
    background-color: #b1110f;
    color: #f2e78d;
    width: 100px;
    height: 50px;
`;

export const FrameScore = styled.th`
    height: 100px;
    width: 100px;
    color: ${props => props.color};
    background-color: #043bee;
    border: outset 1px white;
`;

export const ScoreSubmit = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 10px;
`;

export const Caption = styled.caption`
    color: white;
    font-family: W95FA;
    font-size: 30px;
`;