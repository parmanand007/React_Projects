import styled from "styled-components"
export const Button =styled.button`
    color:white;
    padding: 10px 18px;
    gap:10px;
    min-width: 220px;
    background: #000000;
    border-radius: 5px;
    border:1px solid transparent;
    transform: 0.4s background ease-out;

    &:hover {
       background-color:white ;
       border:1px solid black;
       color:black;
       transition: 0.3s background ease-in;
    }

`
export const OutlineButton =styled(Button)`
   background-color: white;
   border: 1px solid black;
   color:black;
   &:hover {
    background-color: black;
    border:1px solid transparent;
    color:white;
    
   }

`