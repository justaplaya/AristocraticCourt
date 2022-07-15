import React from 'react'
import styled,{css} from 'styled-components'
import { DefaultTheme } from 'styled-components'

const StyledSubtitle = styled.p<DefaultTheme>`
display:  block;
font-size: 15px;
color: ${props=>props.color || 'whitesmoke'};
text-align: ${props=>props.align || 'center'};
z-index: ${props=>props.zIndex || '2'};
pointer-events: none;

${props=>props.big && css`
font-size: calc( 10px * 1.5 );
`}
@media screen and (min-width: 360px){
    font-size: 16px;
    ${props=>props.big && css`
    font-size: calc( 16px * 1.5 );
    `}
}
@media screen and (min-width: 560px){
    font-size: 25px;
    ${props=>props.big && css`
    font-size: calc( 20px * 1.5 );
    `}
}
@media screen and (min-width: 768px){
    font-size: 25px;
    ${props=>props.big && css`
    font-size: calc( 20px * 1.5 );
    `}
}

@media screen and (min-width: 1024px){
    font-size: 20px;
    ${props=>props.big && css`
    font-size: calc( 20px * 1.5 );
    `}
}

@media screen and (min-width: 1366px){
    font-size: 25px;
    ${props=>props.big && css`
    font-size: calc( 20px * 1.5 );
    `}
}

@media screen and (min-width: 1920px){
    font-size: 30px;
    ${props=>props.big && css`
    font-size: calc( 30px * 1.5 );
    `}
}

`

const Subtitle = (props) => {
    
    return <StyledSubtitle {...props} />
 
    }
 export default Subtitle