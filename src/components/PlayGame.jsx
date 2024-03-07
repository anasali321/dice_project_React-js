import React from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { useState } from "react";
import Rules from "./Rules";

const PlayGame = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError(() => alert("You have Not Selected any Number"));
      return;
    }
    setError("");
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if(selectedNumber ===randomNumber) {
      setScore((prev) => prev + 5)
    } else {
      setScore((prev) => prev -1)
    }

    setSelectedNumber(undefined)
  };

  const resetScore = () => {
    setScore(0);
  }

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btn">
        <button onClick={resetScore}>Reset</button>
        <button onClick={() => setShowRules(prev => !prev)}>{showRules ? "Hide" : "Show"} Rules</button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default PlayGame;

const MainContainer = styled.div`
  padding-top: 30px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
    gap: 400px;
  }
  .btn{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-direction: column;
    button{
      color: white;
      padding: 10px 18px ;
      background: #000000;
      border-radius: 5px;
      min-width: 220px;
      padding-left: 10px;
      border: 1px solid transparent;

      &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s;
      }

  }
`;
