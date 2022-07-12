import React, { useEffect, useRef, useState } from 'react'
import Button from '../Tools/Button/Button'
import Title from '../Tools/Title/Title'
import Flex from '../Tools/Flex/Flex'

const Counter = function({onClick, onChange}){
  
    const [count,setCount] = useState<number>(0)
    function increment(){
      if(count <= 4){
        setCount(count+1)
        showAmountPlus()
      }
      }
      function decrement(){
        if(count > 0){
        setCount(count-1)
        showAmountMinus()
        }
      }
      const showAmountPlus = () => {
        onClick(count+1)
      }
      const showAmountMinus = () => {
        onClick(count-1)
      }
      useEffect(()=>{
        setCount(0)
      },[onChange])

    return(
        <Flex paddingSmallest smallestGap shadow={'none'} background={'transparent'}>
            <Title data-value={count} >{count}</Title>
            <Flex paddingBig biggestGap direction={'row'} shadow={'none'} background={'transparent'}>
            <Button counterWidth counterHeight backgroundImage={'url(https://raw.githubusercontent.com/justaplaya/AristocraticCourt/main/src/images/plus.webp)'} backgroundColor={'rgb(255, 50, 0)'} shadowSmallOrange onClick={increment}></Button>
            <Button counterWidth counterHeight backgroundImage={'url(https://raw.githubusercontent.com/justaplaya/AristocraticCourt/main/src/images/minus.webp)'} backgroundColor={'rgb(255, 50, 0)'} shadowSmallOrange onClick={decrement}></Button>
            </Flex>
        </Flex>
    )
}

export default Counter