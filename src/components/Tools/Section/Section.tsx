import React from 'react'
import styled,{css} from 'styled-components'
import { DefaultTheme } from 'styled-components'

const StyledSection = styled.section<DefaultTheme>`
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
position:${props=>props.position||'relative'};

@media screen and (min-width: 360px){
   padding: 10px;
   gap: 10px;
}
@media screen and (min-width: 560px){
   padding: 15px;
   gap: 15px;
}
@media screen and (min-width: 768px){
   padding: 20px;
   gap: 20px;
}
@media screen and (min-width: 1024px){
   padding: 20px;
   gap: 20px;
}
@media screen and (min-width: 1366px){
   padding: 20px;
   gap: 20px;
}
@media screen and (min-width: 1920px){
   padding: 20px 50px;
   gap: 20px;
}
`
const Section = (props) => {
    
   return <StyledSection {...props}/>

   }
export default Section