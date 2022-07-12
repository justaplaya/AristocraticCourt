import React from 'react'
//import styles from './Button.module.scss'
import styled,{css} from 'styled-components'
import { DefaultTheme } from 'styled-components'

const StyledSection = styled("section")<DefaultTheme>`
height:  ${props=>props.height || '100vh'};
background: ${props=>props.background || 'whitesmoke'};
display:  ${props=>props.display || 'flex'};
flex-direction:  ${props=>props.direction || 'column'};
align-items:  ${props=>props.align || 'center'};
justify-content:  ${props=>props.justify || 'center'};
padding:  ${props=>props.padding || '10px'};
overflow:  ${props=>props.overflow || 'hidden'};
gap: ${props=>props.gap || '10px'};
min-height: ${props=>props.minHeight};
position:${props=>props.position||'relative'}
`
const Section = (props) => {
    
   return <StyledSection {...props}/>

   }
export default Section