import React from 'react'
import { styled } from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
 <h2> How to play dice game</h2>
 <div className='text'>
    <p>Select any Number</p>
    <p>Click on dice images</p>
    <p>
        after click on dice if selected number came
        on dice you will get same point as dice
    </p>
    <p>if you will get another number on dice then 
        -2 will be dedtected from score.
    </p>
 </div>

</RulesContainer>
  )
}

export default Rules


const RulesContainer =styled.div`
max-width: 800px;
margin: 0 auto;

margin-top:40px;
border-radius: 10px;
padding: 20px;
background-color: #fbf1f1;
h2{
    font-size: 24px;
    font-weight: bold;
}
.text{
    margin-top:24px;

}

`