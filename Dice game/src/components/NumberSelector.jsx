import { useState } from "react"
import styled from "styled-components"

const NumberSelector = ({setError,selected,setSelected,error})=>{
  const arrayN = [1,2,3,4,5,6]
 
  const numberSelectorHandler = (value)=>{
    setSelected(value)
    setError("")
  }
    return (
<NumberSelectorContainer>
    <p className="error">{error}</p>
<div className="flex">
{
                arrayN.map((value,i)=> (
                <Box
                isSelected={
                    value=== selected
                } 
                key={i}
                onClick={()=>{numberSelectorHandler(value)}}
                >{value}</Box>
                ))
            }

    </div>
    <p>Select Number</p>    
</NumberSelectorContainer>
    )
}

export  default NumberSelector;

const Box=styled.div`
    
    height: 72px;
    width: 72px;
    border:1px solid black;
    display :grid;
    place-items:center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props)=>props.isSelected?"black":"white"};
    color: ${(props)=>(!props.isSelected?"black":"white")};
`

const NumberSelectorContainer = styled.div`
    display: flex;
    align-items: end;
    flex-direction: column;
    
    .flex {
        display: flex;
        gap:24px;

    }

    p{
        font-size: 24px;
        font-weight: 700px;

    }
    .error{
        color:red;
    }

`