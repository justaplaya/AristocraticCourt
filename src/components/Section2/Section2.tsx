import React, { useEffect } from 'react'
import Button from '../Tools/Button/Button'
import Section from '../Tools/Section/Section'
import Container from '../Tools/Container/Container'
import Title from '../Tools/Title/Title'
import Subtitle from '../Tools/Subtitle/Subtitle'
import { useDispatch, useSelector } from 'react-redux'
import cities from "../Actions/Cities"
import {State} from '../../declaration'

const Section2 = function(){
    const dispatch = useDispatch()
    const fullStore = useSelector((state:State)=>state)
    // выгружаем города по факту загрузки
    window.addEventListener('DOMContentLoaded', downloadCitiesByAction)
    function downloadCitiesByAction() {
         dispatch<any>(cities())
     }
    // диспатчим выбранный город
    const addCity=(event)=>{
        if(event.target.getAttribute('data-name') != fullStore.orderCity){
        dispatch({type:'AddOrderCity',orderCity:event.target.getAttribute('data-name')})
        }
    }
    useEffect(() => {
        console.log(fullStore)
    },[fullStore])
    
   return(
       <Section background={'rgb(50,255,150)'}>
           <Title 
           color={'rgb(34,34,34)'}>
               Выберите город
            </Title>

        {Object.keys(fullStore.cities).length != 0 ?
        
        <Container
         height={'80vh'} 
         greenShadow>
        {Object.values(fullStore.cities).map(city => 
        <Button 
        width={'85vw'} 
        darkened 
        inactive
        justify={'flex-end'} 
        align={'flex-start'} 
        height={'30%'} 
        shadow={'none'} 
        background={`url(${city.photo})`} 
        data-name={city.name} 
        onClick={addCity} 
        key={city.name} 
        href="#3">
            <Title data-name={city.name} onClick={addCity}>
                {city.name}
            </Title>
            <Subtitle data-name={city.name} onClick={addCity}>
                {city.description}
            </Subtitle>
        </Button>
        )}
        </Container>

        :

        <div>GitHub connection error</div>
        }
       </Section>
   )

   }
export default Section2


