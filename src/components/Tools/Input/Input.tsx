import React from 'react'
import styled from 'styled-components'
import { DefaultTheme } from 'styled-components'

const StyledInput = styled.input<DefaultTheme>`
border-radius: ${props=>props.borderRadius || '10px'};
font-size:${props=>props.size || '20px'};
padding: ${props=>props.padding || '5px 10px'};
transition: all .3s linear;
color: ${theme => theme.main};
`

const Input = (props) => {
    return (
        <StyledInput {...props}/>
    )
}
export default Input