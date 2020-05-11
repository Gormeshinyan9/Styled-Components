import React  from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
    primary:'red',
    secondary:'green',
    font:'fantasy'
}

const Button = styled.button`
font-size: 1.3rem;
border: none;
font-family: ${(props)=>props.theme.font};
border-radius: 5px;
background: ${props=>props.theme.primary};
color: white;
padding: 7px 10px;
&:hover{
    background:blue;
    transition:0.5s ease-in;
    transform:rotate(-360deg);
   
}
`;
const H1 = styled.h1`
font-size: 3rem;
font-family: ${(props)=>props.theme.font};

`

export default function App(){
    
    return(
        <ThemeProvider theme={theme}>
        <div>
         <H1>Styled components</H1>
         <form>
             <Button primary>Craeted New</Button>
         </form>
        </div>
        </ThemeProvider>
    )
}



