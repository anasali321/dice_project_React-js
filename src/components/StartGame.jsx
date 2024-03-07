import React from "react";
import styled from "styled-components";

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div className="h-image">
        <img src="/images/Dice.png" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <button onClick={toggle}>Play Now</button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 900px;
  height: 95vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  gap: 40px;

  .h-image{
    img{
      height: 400px;
      width: 450px;
      object-fit: fill;
      white-space: nowrap;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: end;
    padding-left: 30px;
    margin: 0px;
    gap: 0px;
    h1 {
      font-size: 96px;
      white-space: nowrap;
      padding-left: 0px;
      margin: 0px;
      padding: 0px;

    }
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
  }

`;

