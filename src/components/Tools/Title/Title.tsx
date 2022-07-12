import React from 'react'
import styled,{css} from 'styled-components'
import { DefaultTheme } from 'styled-components'

const StyledTitle = styled("h1")<DefaultTheme>`
display:  ${props=>props.display || 'block'};
margin: ${props=>props.margin};
font-size:${props=>props.size || '40px'};
color: ${props=>props.color || 'whitesmoke'};
text-align: ${props=>props.align || 'center'};
z-index: ${props=>props.zIndex || '2'};
pointer-events: ${props=>props.pointerEvents || 'none'};

${props=>props.small && `
font-size: calc( 40px / 1.5 );
`}
${props=>props.smaller && `
font-size: calc( 40px / 2 );
`}

`

const Title = (props) => {
    
    return <StyledTitle {...props} />
 
    }
    
 export default Title




