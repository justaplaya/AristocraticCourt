import React from 'react'
import styled,{css} from 'styled-components'
import { DefaultTheme } from 'styled-components'

const StyledSubtitle = styled("p")<DefaultTheme>`
display:  ${props=>props.display || 'block'};
margin: ${props=>props.margin};
font-size:${props=>props.size || '16px'};
color: ${props=>props.color || 'whitesmoke'};
text-align: ${props=>props.align || 'center'};
z-index: ${props=>props.zIndex || '2'};
pointer-events: ${props=>props.pointerEvents || 'none'};

${props=>props.big && `
font-size: calc( 16px * 1.5 );
`}

`

const Subtitle = (props) => {
    
    return <StyledSubtitle {...props} />
 
    }
 export default Subtitle