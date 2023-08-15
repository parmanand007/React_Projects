import TotalScore from "./TotalScore"
import NumberSelector from "./NumberSelector";
import styled from "styled-components"
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";
const GamePlay =()=>{
    const [score,setScore]=useState(0)
  const [selected,setSelected]=useState()
const [cDice,setCDice]=useState(1);
const [error,setError]=useState()

const [show,setShow]=useState(false)
const generateRandomNumber = (min,max)=>{
    return Math.floor(Math.random()*(max-min)  + min)

}

const roleDice = ()=>{
    const randomNumber= generateRandomNumber(1,7)
    setCDice(randomNumber)
    if (!selected) {
        setError("You have not selected any Number")
        return 
    }
    
    if (selected===randomNumber){
        setScore(score +randomNumber)
    }
    else{
        setScore(score-2)
    }

    setSelected(undefined)
}
     
const resetScore = ()=>{
    setScore(0)
}

    return ( <MainContainer>
        <div className="top_section">
        <TotalScore    score={score}/>  
        <NumberSelector 
        setError={setError}
        selected={selected} setSelected={setSelected} error={error}/>
        </div>
        <RollDice cDice={cDice} roleDice={roleDice} />
        <div className="btn">
            <Button onClick={()=>resetScore()}>Reset</Button>
            <OutlineButton
            onClick={()=>setShow(!show)}
            >{show ?"Hide":"Show"} Rules</OutlineButton>
        </div>
        {show && <Rules />} 
    </MainContainer>
    );
}

export default GamePlay;


const MainContainer = styled.main`
padding-top:70px;
 .top_section{
    display: flex;
    justify-content: space-around;
    /* align-items: end; */
 }
 .btn{
    gap:10px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    align-items: center;
 }
`