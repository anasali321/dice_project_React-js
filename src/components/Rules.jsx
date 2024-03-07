import React from 'react';
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <div className="text">
            <p>Select any Number</p>
            <p>Click on dice image</p>
            <p>after click on dice if selected number is equal to dice number you will get some points</p>
            <p>if you get wrong guess then 1 point will be deducted</p>
        </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 0px;
    background-color: #FBF1F1;
    padding: 17px;
    margin-top: 10px;
    border-radius: 10px; 
    h2{
        font-size: 20px;
        margin: 0px;
    }
    .text{
        margin-top: 20px;
    }
    p{
        padding: 0px;
        margin: 0px;
    }
`;