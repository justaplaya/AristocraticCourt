import React from 'react'
import styled,{css} from 'styled-components'
import { DefaultTheme } from 'styled-components'

const StyledFlex = styled("div")<DefaultTheme>`
background: ${props=>props.background || 'transparent'};
display:  ${props=>props.display || 'flex'};
flex-direction:  ${props=>props.direction || 'column'};
align-items:  ${props=>props.align || 'center'};
justify-content:  ${props=>props.justify || 'center'};
box-shadow: ${props=>props.shadow || 'none'};
border-radius: ${props=>props.borderRadius || '0'};
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

&.active{
    opacity: 0;
    pointer-events: none;
}
${props=>props.absolute && css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 90%;
    height: 90%;
    box-shadow:none;
`
}
${props=>props.paddingSmallest && css`
padding: calc( 15px / 10 );
`}
${props=>props.paddingBig && css`
padding: calc( 15px * 1.3 );
`}
${props=>props.smallestGap && css`
gap: calc( 10px / 10 );
`}
${props=>props.biggerGap && css`
gap: calc( 10px * 2 );
`}
${props=>props.biggestGap && css`
gap: calc( 10px * 3 );
`}

`

const Flex = (props) => {
    return <StyledFlex {...props}/>
}
export default Flex