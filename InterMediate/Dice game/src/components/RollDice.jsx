import { useState } from "react";
import styled from "styled-components"

const RollDice = ({cDice,roleDice})=>{




    return (
        <DiceContainer>
        <div className="dice"
        onClick={roleDice}
        >
       <img src={`./images/dice_${cDice}.png`} alt="dice 1" /> 
        </div>
        <p>Click On Dice to roll</p>
            </DiceContainer>  
 );
}

export default RollDice


const DiceContainer =styled.div`
    margin-top:48px;
    display: flex   ;
    flex-direction:column;
    align-items: center;

    p{
        font-size: 24px ;
    }

    .dice{
        cursor: pointer;
    }

`