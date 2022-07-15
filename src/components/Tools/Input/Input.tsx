import React from 'react'
import styled from 'styled-components'
import { DefaultTheme } from 'styled-components'

const StyledInput = styled.input<DefaultTheme>`
border-radius: 7.5px;
font-size: 15px;
padding: 5px 10px;
border:none;
transition: all .3s linear;

@media screen and (min-width: 360px){
    border-radius: 10px;
    font-size: 20px;
    padding: 5px 10px;
}
@media screen and (min-width: 560px){
    border-radius: 15px;
    font-size: 30px;
    padding: 7.5px 12.5px;    
}
@media screen and (min-width: 768px){
    border-radius: 15px;
    font-size: 30px;
    padding: 7.5px 12.5px;    
}
@media screen and (min-width: 1024px){
    border-radius: 20px;
    font-size: 35px;
    padding: 10px 15px;    
}
@media screen and (min-width: 1366px){
    border-radius: 20px;
    font-size: 35px;
    padding: 10px 15px;    
}
@media screen and (min-width: 1920px){
    border-radius: 25px;
    font-size: 40px;
    padding: 15px 20px;    
}
`

const Input = (props) => {
    return (
        <StyledInput {...props}/>
    )
}
export default Input