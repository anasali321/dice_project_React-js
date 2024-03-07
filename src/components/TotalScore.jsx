import React from 'react'
import styled from "styled-components";

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore;

const ScoreContainer = styled.div`
    max-width: 150px;
    text-align: center;
    h1 {
       font-size: 70px;
       padding: 0px;
       margin: 0px; 
    }
    p {
        font-size: 19px;
        font-weight: 300px;
    }
`;