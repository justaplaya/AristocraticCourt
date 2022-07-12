import React from 'react'
import styled,{css} from 'styled-components'
import { DefaultTheme } from 'styled-components'

const StyledContainer = styled("div")<DefaultTheme>`
background: ${props=>props.background || 'rgb(34,34,34)'};
display:  ${props=>props.display || 'flex'};
flex-direction:  ${props=>props.direction || 'column'};
align-items:  ${props=>props.align || 'center'};
justify-content:  ${props=>props.justify || 'center'};
box-shadow: ${props=>props.shadow || 'inset 0 0 20px 0px rgb(255, 50, 0)'};
border-radius: ${props=>props.borderRadius || '10px'};
border: ${props=>props.border || 'none'};
margin: ${props=>props.margin || '0 auto'};
padding: ${props=>props.padding || '15px'};
gap: ${props=>props.gap || '10px'};
overflow:  ${props=>props.overflow || 'hidden'};
position:  ${props=>props.position || 'relative'};
width:  ${props=>props.width || 'auto'};
height:  ${props=>props.height || 'auto'};
z-index: ${props=>props.zIndex || '2'};
transition: all .5s linear;
min-height: ${props=>props.minHeight};

&.active{
    opacity: 0;
    pointer-events: none;
}
${props=>props.yellowShadow && `
box-shadow: inset 0 0 20px 0 rgb(255,200,50);
`}
${props=>props.greenShadow && `
box-shadow: inset 0 0 20px 0 rgb(50,255,150);
`}
${props=>props.bigGap && `
gap: calc( 10px * 1.5 );
`}

${props=>props.absolute && `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    height: 100%;
    box-shadow:${props=>props.shadow};
`
}
`

const Container = (props) => {
    
    return <StyledContainer {...props} />
 
    }
 export default Container