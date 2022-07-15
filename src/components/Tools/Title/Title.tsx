import React from 'react'
import styled,{css} from 'styled-components'
import { DefaultTheme } from 'styled-components'

const StyledTitle = styled.h1<DefaultTheme>`
display: block;
font-size: 25px;
color: ${props=>props.color || 'whitesmoke'};
text-align: ${props=>props.align || 'center'};
z-index: ${props=>props.zIndex || '2'};
pointer-events: none;
${props=>props.small && css`
font-size: calc( 30px / 1.5 );
`}
${props=>props.smaller && css`
font-size: calc( 30px / 2 );
`}
@media screen and (min-width: 360px){
    font-size: 35px;
    ${props=>props.small && css`
    font-size: calc( 35px / 1.5 );
    `}
    ${props=>props.smaller && css`
    font-size: calc( 35px / 2 );
    `}
}
@media screen and (min-width: 560px){
    font-size: 45px;
    ${props=>props.small && css`
    font-size: calc( 50px / 1.5 );
    `}
    ${props=>props.smaller && css`
    font-size: calc( 50px / 2 );
    `}
}
@media screen and (min-width: 768px){
    font-size: 50px;
    ${props=>props.small && css`
    font-size: calc( 65px / 1.5 );
    `}
    ${props=>props.smaller && css`
    font-size: calc( 65px / 2 );
    `}
}

@media screen and (min-width: 1024px){
    font-size: 45px;
    ${props=>props.small && css`
    font-size: calc( 45px / 1.5 );
    `}
    ${props=>props.smaller && css`
    font-size: calc( 45px / 2 );
    `}
}

@media screen and (min-width: 1366px){
    font-size: 50px;
    ${props=>props.small && css`
    font-size: calc( 50px / 1.5 );
    `}
    ${props=>props.smaller && css`
    font-size: calc( 50px / 2 );
    `}
}

@media screen and (min-width: 1920px){
    font-size: 60px;
    ${props=>props.small && css`
    font-size: calc( 60px / 1.5 );
    `}
    ${props=>props.smaller && css`
    font-size: calc( 60px / 2 );
    `}
}

`

const Title = (props) => {
    
    return <StyledTitle {...props} />
 
    }
    
 export default Title




