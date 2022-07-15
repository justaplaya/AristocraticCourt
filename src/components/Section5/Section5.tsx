import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import restaurants from "../Actions/Restaurants"
import './Section5.module.scss'
import RestaurantBar from '../RestaurantBar/RestaurantBar'
import Button from '../Tools/Button/Button'
import Section from '../Tools/Section/Section'
import Container from '../Tools/Container/Container'
import Title from '../Tools/Title/Title'
import Subtitle from '../Tools/Subtitle/Subtitle'
import Flex from '../Tools/Flex/Flex'
import {State,currentRestaurants,anyRestaurant, Place} from '../../declaration'

const Section5 = () => {
// объявляем начальные настройки ресторанов, исходя из их типа
    const [currentRestaurants,setCurrentRestaurants] = useState<currentRestaurants>({
        bar:{
            name:'',
            type:'',
            rusType:'',
            style:'',
            artist:'',
            vipSeats:[],
            occupiedVipSeats:[],
            centerSeats:[],
            occupiedCenterSeats:[],
            barSeats:[],
            occupiedBarSeats:[],
            vipPrice:0,
            barPrice:0,
            centerPrice:0
        },
        cafe:{
            name:'',
            type:'',
            rusType:'',
            style:'',
            artist:'',
            vipSeats:[],
            occupiedVipSeats:[],
            centerSeats:[],
            occupiedCenterSeats:[],
            barSeats:[],
            occupiedBarSeats:[],
            vipPrice:0,
            barPrice:0,
            centerPrice:0
        },
        restaurant:{
            name:'',
            type:'',
            rusType:'',
            style:'',
            artist:'',
            vipSeats:[],
            occupiedVipSeats:[],
            centerSeats:[],
            occupiedCenterSeats:[],
            barSeats:[],
            occupiedBarSeats:[],
            vipPrice:0,
            barPrice:0,
            centerPrice:0
        }
    })
    const [currentRestaurantType,setCurrentRestaurantType] = useState<object>({})
    const [bar,setBar] = useState<anyRestaurant>({
        name:'',
        type:'',
        rusType:'',
        style:'',
        artist:'',
        vipSeats:[],
        occupiedVipSeats:[],
        centerSeats:[],
        occupiedCenterSeats:[],
        barSeats:[],
        occupiedBarSeats:[],
        vipPrice:0,
        barPrice:0,
        centerPrice:0
    })
    const [restaurant,setRestaurant] = useState<anyRestaurant>({
        name:'',
        type:'',
        rusType:'',
        style:'',
        artist:'',
        vipSeats:[],
        occupiedVipSeats:[],
        centerSeats:[],
        occupiedCenterSeats:[],
        barSeats:[],
        occupiedBarSeats:[],
        vipPrice:0,
        barPrice:0,
        centerPrice:0
    })
    const [cafe,setCafe] = useState<anyRestaurant>({
        name:'',
        type:'',
        rusType:'',
        style:'',
        artist:'',
        vipSeats:[],
        occupiedVipSeats:[],
        centerSeats:[],
        occupiedCenterSeats:[],
        barSeats:[],
        occupiedBarSeats:[],
        vipPrice:0,
        barPrice:0,
        centerPrice:0
    })
    const [restaurantIsChosen, setRestaurantIsChosen] = useState<boolean>(false)
    const dispatch = useDispatch()
    const fullStore = useSelector((state:State)=>state)
// выгружаем рестораны по факту загрузки
    window.addEventListener('DOMContentLoaded', downloadRestaurantsByAction)
    function downloadRestaurantsByAction() {
         dispatch<any>(restaurants())
     }
// определяем рестораны выбранного города
     const RawStoreRestaurants =  useSelector((state:State) => state.restaurants)
         function figureRestaurants(){
         let storeRestaurants = RawStoreRestaurants[0][fullStore.orderCity]
         setCurrentRestaurants(storeRestaurants)
         }
         function setRestaurants(){
            setBar(currentRestaurants.bar) 
            setRestaurant(currentRestaurants.restaurant)
            setCafe(currentRestaurants.cafe)
         }
// функция выбора ресторана 
         function chooseRestaurant(event){
            dispatch({type:'AddRestaurant',restaurant:event.target.getAttribute('data-name')})
            dispatch({type:'AddTypeOfRestaurant',typeOfRestaurant:event.target.getAttribute('data-type')})
           // задел для будущего масштабирования проекта с отличным строением ресторанов разных типов
            setCurrentRestaurantType([bar,restaurant,cafe].filter ((place:Place) => place.type == event.target.getAttribute('data-type')))
            setRestaurantIsChosen(true)
         }
// слушатели, обновляющие списки ресторанов при выборе иного города
     useEffect(()=>{
        if(fullStore.orderCity[0] != undefined){
            figureRestaurants()
        }
     },[fullStore.orderCity])
     useEffect(()=>{
         if(fullStore.orderCity[0] != undefined){
            setRestaurants()
         }
     },[currentRestaurants])

return(
    <Section background={'rgb(255,200,50)'} >
    <Title small color={'rgb(34,34,34)'}>{restaurantIsChosen ? 'Выберите места' : 'Выберите заведение'}</Title>
    <Container yellowShadow width={'100%'} height={'100%'} >
        {fullStore.orderCity.length == 0 ? 
        <Title>Сперва выберите город</Title> :
        <Flex biggerGap absolute className={restaurantIsChosen ? 'active' : null}>
        <Button data-type={bar.type} data-name={bar.name} onClick={(event)=>chooseRestaurant(event)}>
            <Title small>{bar.name}</Title>
            <Subtitle>Андерграундный {bar.rusType}, где Вы можете творить любые неистовства под музыку неподражаемых {bar.artist} в стиле {bar.style}</Subtitle>
                        </Button>
        <Button data-type={restaurant.type} data-name={restaurant.name} onClick={(event)=>chooseRestaurant(event)}>
            <Title small>{restaurant.name}</Title>
            <Subtitle>А это {restaurant.rusType}, где Вы можете отдохнуть в мире и покое, наслаждаясь нетленной классикой в стиле {restaurant.style}, для вас играет {restaurant.artist}</Subtitle>
                        </Button>
        <Button data-type={cafe.type} data-name={cafe.name} onClick={(event)=>chooseRestaurant(event)}>
            <Title small>{cafe.name}</Title>
            <Subtitle>Уютное {cafe.rusType}, в котором читает лекции {cafe.artist} - весьма известный {cafe.style}</Subtitle>
                        </Button>
    </Flex>
        }
    
    {restaurantIsChosen ? <RestaurantBar restaurant={currentRestaurantType[0] } /> : null}

    </Container>
    </Section>
    )
}

export default Section5