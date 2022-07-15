import React, { useEffect, useState } from 'react';
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'
import Section3 from './Section3/Section3'
import Section4 from './Section4/Section4'
import Section5 from './Section5/Section5'
import Section6 from './Section6/Section6'
import Section7 from './Section7/Section7'
//import ReactPng from './assets/images/react.png';
//import { StyledDiv } from './root.styles';

 const App = () => {
    

    return(
        <div>
        <Section1/>
        <div id="2"><Section2/></div>
        <div id="3"><Section3/></div>
        <div id="4"><Section4/></div>
        <div id="5"><Section5/></div>
        <div id="6"><Section6/></div>
        <div id="7"><Section7/></div>
        </div>
    )
}
export default App




/*export const Root = ({ name = 'fivenine' }: { name?: string }) => (
    <div>
       <div>{name}</div>
        <StyledDiv />
    </div>
);*/