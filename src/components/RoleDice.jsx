import styled from "styled-components";

const RoleDice = ({currentDice, roleDice}) => {



  return (
    <DiceContainer>
        <div className="dice" onClick={roleDice}>
            <img src={`/images/Dices/dice_${currentDice}.png`} alt="dice 1" />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice;

const DiceContainer = styled.div`
    margin: 0px;
    padding: 0px;
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p{
        font-size: 24px;
        margin: 0px;
        padding: 10px;
    }

    img{
        height: 230px;
        width: 230px;
        object-fit: fill;
    }

    .dice{
        cursor: pointer;
    }
`;