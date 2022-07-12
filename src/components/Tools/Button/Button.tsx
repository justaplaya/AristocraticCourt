import React, { useRef, useState } from 'react'
import styled,{css} from 'styled-components'
import { DefaultTheme } from 'styled-components'

//const [primary,setPrimary]=useState<string>('rgb(135,0,10')

const StyledButton = styled.a<DefaultTheme>`
display:  ${props=>props.display || 'flex'};
flex-direction:  ${props=>props.direction || 'column'};
align-items:  ${props=>props.align || 'center'};
justify-content:  ${props=>props.justify || 'center'};

        width:${props=>props.width || 'fit-content'};
    margin: ${props=>props.margin || '0 auto'};
    padding: ${props=>props.padding || '5px 10px'};
    border-radius: ${props=>props.borderRadius || '10px'};
    border: ${props=>props.border || 'none'};
    background: ${props=>props.background || 'rgb(255, 50, 0)'};
    background-color: ${props=>props.backgroundColor};
    background-image: ${props=>props.backgroundImage};

    color: ${props=>props.color || 'whitesmoke'};
    box-shadow: ${props=>props.shadow || '0 0 20px 0px rgb(255, 50, 0)'};
    font-size:${props=>props.size || '20px'};
    transition: all .3s linear;
    transform: scale(${props=>props.scale || '1'});
    height:  ${props=>props.height || 'auto'};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: ${props=>props.zIndex || '2'};
    text-align:${props=>props.textAlign || 'center'};


    &:hover{
        background-color: rgb(255,200,50);
        box-shadow:0 0 15px 0px rgb(255,200,50);
        color:${props=>props.color || 'rgb(34,34,34)'};
    }

    &.active{
        background-color: rgb(255,200,50);
        box-shadow: 0 0 15px 0px rgb(255,200,50);
        color:${props=>props.color || 'rgb(34,34,34)'};
        background-color: ${props=>props.backgroundColor};
        background-image: ${props=>props.backgroundImage};
    
    }
    ${props=>props.accent && `
    background-color:rgb(50,255,150);
    box-shadow: 0 0 20px 0px rgb(50,255,150);
    color:rgb(34,34,34);
    `   
}
${props=>props.big && `
font-size: calc( 20px * 1.5 );
`}
${props=>props.shadowSmallOrange && `
box-shadow: ${props=>props.shadow || '0 0 15px 0px rgb(255, 50, 0)'};
`}
${props=>props.shadowSmallGreen && `
box-shadow: 0 0 15px 0px rgb(50, 255, 150);
`}
${props=>props.counterWidth && `
width: 40px;
`}
${props=>props.counterHeight && `
height: 40px;
`}
${props=>props.inactive && `
box-shadow: none !important;
`}
${props=>props.darkened && `
&::after{
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.5);
    z-index: ${props=>props.zIndex || '1'};
    border-radius: 10px;

}
`
}
`



const Button = (props) => {

   return (
           <StyledButton {...props} />
   )


   }
export default Button