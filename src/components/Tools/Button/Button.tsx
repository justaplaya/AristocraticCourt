import React from 'react'
import styled,{css} from 'styled-components'
import { DefaultTheme } from 'styled-components'

const StyledButton = styled.a<DefaultTheme>`
display:  ${props=>props.display || 'flex'};
flex-direction:  ${props=>props.direction || 'column'};
align-items:  ${props=>props.align || 'center'};
justify-content:  ${props=>props.justify || 'center'};
width:${props=>props.width || 'fit-content'};
margin: ${props=>props.margin || '0 auto'};
padding: 2.5px 5px;
border-radius: 7.5px;
border: ${props=>props.border || 'none'};
background: ${props=>props.background || 'rgb(255, 50, 0)'};
background-color: ${props=>props.backgroundColor};
background-image: ${props=>props.backgroundImage};
color: ${props=>props.color || 'whitesmoke'};
box-shadow: ${props=>props.shadow || '0 0 15px 0px rgb(255, 50, 0)'};
font-size: 15px;
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
    }

${props=>props.accent && css`
background-color:rgb(50,255,150);
box-shadow: 0 0 20px 0px rgb(50,255,150);
color:rgb(34,34,34);
`   
}
${props=>props.big && css`
font-size: calc( 20px * 1.5 );
`}
${props=>props.shadowSmallOrange && css`
box-shadow: 0 0 15px 0px rgb(255, 50, 0);
`}
${props=>props.shadowSmallGreen && css`
box-shadow: 0 0 15px 0px rgb(50, 255, 150);
`}
${props=>props.counterWidth && css`
width: 30px;
border-radius:50%;
`}
${props=>props.counterHeight && css`
height: 30px;
border-radius:50%;

`}
${props=>props.inactive && css`
box-shadow: none !important;
`}
${props=>props.darkened && css`
&::after{
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.5);
    z-index: 1;
    border-radius: 7.5px;

}
`
}

@media screen and (min-width: 360px){
    padding: 5px 10px;
    border-radius: 10px;
    box-shadow: ${props=>props.shadow || '0 0 20px 0px rgb(255, 50, 0)'};
    font-size: 20px;
    &:hover{
        box-shadow:0 0 20px 0px rgb(255,200,50);
        color:${props=>props.color || 'rgb(34,34,34)'};
    }

    &.active{
        box-shadow: 0 0 20px 0px rgb(255,200,50);
        color:${props=>props.color || 'rgb(34,34,34)'};
    }
    ${props=>props.accent && css`
background-color:rgb(50,255,150);
box-shadow: 0 0 20px 0px rgb(50,255,150);
color:rgb(34,34,34);
`   
}
${props=>props.big && css`
font-size: calc( 20px * 1.5 );
`}
${props=>props.shadowSmallOrange && css`
box-shadow: 0 0 15px 0px rgb(255, 50, 0);
`}
${props=>props.shadowSmallGreen && css`
box-shadow: 0 0 15px 0px rgb(50, 255, 150);
`}
${props=>props.counterWidth && css`
width: 40px;
border-radius:50%;
`}
${props=>props.counterHeight && css`
height: 40px;
border-radius:50%;
`}
${props=>props.inactive && css`
box-shadow: none !important;
`}
${props=>props.darkened && css`
&::after{
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.5);
    z-index: 1;
    border-radius: 10px;

}
`
}

@media screen and (min-width: 560px){
    padding: 7.5px 12.5px;
    border-radius: 15px;
    box-shadow: ${props=>props.shadow || '0 0 25px 0px rgb(255, 50, 0)'};
    font-size: 30px;
    &:hover{
        box-shadow:0 0 25px 0px rgb(255,200,50);
        color:${props=>props.color || 'rgb(34,34,34)'};
    }

    &.active{
        box-shadow: 0 0 25px 0px rgb(255,200,50);
        color:${props=>props.color || 'rgb(34,34,34)'};
    }
    ${props=>props.accent && css`
background-color:rgb(50,255,150);
box-shadow: 0 0 25px 0px rgb(50,255,150);
color:rgb(34,34,34);
`   
}
${props=>props.big && css`
font-size: calc( 30px * 1.5 );
`}
${props=>props.shadowSmallOrange && css`
box-shadow: 0 0 20px 0px rgb(255, 50, 0);
`}
${props=>props.shadowSmallGreen && css`
box-shadow: 0 0 20px 0px rgb(50, 255, 150);
`}
${props=>props.counterWidth && css`
width: 50px;
border-radius:50%;
`}
${props=>props.counterHeight && css`
height: 50px;
border-radius:50%;
`}
${props=>props.inactive && css`
box-shadow: none !important;
`}
${props=>props.darkened && css`
&::after{
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.5);
    z-index: 1;
    border-radius: 15px;

}
`
}

@media screen and (min-width: 768px){
    padding: 7.5px 12.5px;
    border-radius: 15px;
    box-shadow: ${props=>props.shadow || '0 0 25px 0px rgb(255, 50, 0)'};
    font-size: 30px;
    &:hover{
        box-shadow:0 0 25px 0px rgb(255,200,50);
        color:${props=>props.color || 'rgb(34,34,34)'};
    }

    &.active{
        box-shadow: 0 0 25px 0px rgb(255,200,50);
        color:${props=>props.color || 'rgb(34,34,34)'};
    }
    ${props=>props.accent && css`
background-color:rgb(50,255,150);
box-shadow: 0 0 25px 0px rgb(50,255,150);
color:rgb(34,34,34);
`   
}
${props=>props.big && css`
font-size: calc( 30px * 1.5 );
`}
${props=>props.shadowSmallOrange && css`
box-shadow: 0 0 25px 0px rgb(255, 50, 0);
`}
${props=>props.shadowSmallGreen && css`
box-shadow: 0 0 25px 0px rgb(50, 255, 150);
`}
${props=>props.counterWidth && css`
width: 50px;
border-radius:50%;
`}
${props=>props.counterHeight && css`
height: 50px;
border-radius:50%;
`}
${props=>props.inactive && css`
box-shadow: none !important;
`}
${props=>props.darkened && css`
&::after{
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.5);
    z-index: 1;
    border-radius: 15px;

}
`
}

@media screen and (min-width: 1024px){
    padding: 5px 10px;
    border-radius: 20px;
    box-shadow: ${props=>props.shadow || '0 0 20px 0px rgb(255, 50, 0)'};
    font-size: 22.5px;
    &:hover{
        box-shadow:0 0 20px 0px rgb(255,200,50);
        color:${props=>props.color || 'rgb(34,34,34)'};
    }

    &.active{
        box-shadow: 0 0 20px 0px rgb(255,200,50);
        color:${props=>props.color || 'rgb(34,34,34)'};
    }
    ${props=>props.accent && css`
background-color:rgb(50,255,150);
box-shadow: 0 0 20px 0px rgb(50,255,150);
color:rgb(34,34,34);
`   
}
${props=>props.big && css`
font-size: calc( 22.5px * 1.5 );
`}
${props=>props.shadowSmallOrange && css`
box-shadow: 0 0 15px 0px rgb(255, 50, 0);
`}
${props=>props.shadowSmallGreen && css`
box-shadow: 0 0 15px 0px rgb(50, 255, 150);
`}
${props=>props.counterWidth && css`
width: 45px;
border-radius:50%;
`}
${props=>props.counterHeight && css`
height: 45px;
border-radius:50%;
`}
${props=>props.inactive && css`
box-shadow: none !important;
`}
${props=>props.darkened && css`
&::after{
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.5);
    z-index: 1;
    border-radius: 20px;

}
`
}

@media screen and (min-width: 1366px){
    padding: 5px 10px;
    border-radius: 20px;
    box-shadow: ${props=>props.shadow || '0 0 20px 0px rgb(255, 50, 0)'};
    font-size: 25px;
    &:hover{
        box-shadow:0 0 20px 0px rgb(255,200,50);
        color:${props=>props.color || 'rgb(34,34,34)'};
    }

    &.active{
        box-shadow: 0 0 20px 0px rgb(255,200,50);
        color:${props=>props.color || 'rgb(34,34,34)'};
    }
    ${props=>props.accent && css`
background-color:rgb(50,255,150);
box-shadow: 0 0 20px 0px rgb(50,255,150);
color:rgb(34,34,34);
`   
}
${props=>props.big && css`
font-size: calc( 22.5px * 1.5 );
`}
${props=>props.shadowSmallOrange && css`
box-shadow: 0 0 15px 0px rgb(255, 50, 0);
`}
${props=>props.shadowSmallGreen && css`
box-shadow: 0 0 15px 0px rgb(50, 255, 150);
`}
${props=>props.counterWidth && css`
width: 45px;
border-radius:50%;
`}
${props=>props.counterHeight && css`
height: 45px;
border-radius:50%;
`}
${props=>props.inactive && css`
box-shadow: none !important;
`}
${props=>props.darkened && css`
&::after{
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.5);
    z-index: 1;
    border-radius: 20px;

}
`
}

@media screen and (min-width: 1920px){
    padding: 10px 20px;
    border-radius: 25px;
    box-shadow: ${props=>props.shadow || '0 0 25px 0px rgb(255, 50, 0)'};
    font-size: 35px;
    &:hover{
        box-shadow:0 0 25px 0px rgb(255,200,50);
        color:${props=>props.color || 'rgb(34,34,34)'};
    }

    &.active{
        box-shadow: 0 0 25px 0px rgb(255,200,50);
        color:${props=>props.color || 'rgb(34,34,34)'};
    }
    ${props=>props.accent && css`
background-color:rgb(50,255,150);
box-shadow: 0 0 25px 0px rgb(50,255,150);
color:rgb(34,34,34);
`   
}
${props=>props.big && css`
font-size: calc( 22.5px * 1.5 );
`}
${props=>props.shadowSmallOrange && css`
box-shadow: 0 0 20px 0px rgb(255, 50, 0);
`}
${props=>props.shadowSmallGreen && css`
box-shadow: 0 0 20px 0px rgb(50, 255, 150);
`}
${props=>props.counterWidth && css`
width: 60px;
border-radius:50%;
`}
${props=>props.counterHeight && css`
height: 60px;
border-radius:50%;
`}
${props=>props.inactive && css`
box-shadow: none !important;
`}
${props=>props.darkened && css`
&::after{
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.5);
    z-index: 1;
    border-radius: 20px;

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