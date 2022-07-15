import React from 'react';
import {render} from 'react-dom'
import {createGlobalStyle} from 'styled-components'
//?import {State} from './declaration'

const Global = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}
a{
    text-decoration: none;
}
`
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk';

import  App  from "./components/App";

const defaultState = {
    cities: [],
    restaurants: [],
    categories: {},
    Напиток: {},
    Блюдо: {},
    Десерт: {},
    pickedVipSeats:[],
    pickedCenterSeats:[],
    pickedBarSeats:[],
    orderCity: '',
    orderList: {},
    typeOfRestaurant: '',
    date:{},
    time:'',
    restaurant:''
}

const DownloadCities = "DownloadCities"
const DownloadCategories = "DownloadCategories"
const DownloadCategory1 = "DownloadCategory1"
const DownloadCategory2 = "DownloadCategory2"
const DownloadCategory3 = "DownloadCategory3"
const DownloadRestaurants = "DownloadRestaurants"

const reducer = (state = defaultState, action: DownloadCitiesActionType | any) => {

    switch (action.type) {

    case DownloadCities:

    return {...state, cities:action.cities}

    case 'AddOrderCity':

    return {...state, orderCity: action.orderCity}

    case DownloadCategory1:

    return {...state, Напиток:action.category1}

    case DownloadCategory2:

    return {...state, Блюдо:action.category2}

    case DownloadCategory3:

    return {...state, Десерт:action.category3}

    case DownloadCategories:

    return {...state, categories:[action.categories]}

    case DownloadRestaurants:

    return {...state, restaurants:[action.restaurants]}

    case 'UploadOrderList':

    return {...state, orderList:action.orderList}

    case 'AddDate':
    
    return {...state, date:action.date}

    case 'AddTime':
    
    return {...state, time:action.time}

    case 'AddRestaurant':

    return {...state, restaurant:[action.restaurant]}

    case 'AddTypeOfRestaurant':

    return {...state, typeOfRestaurant:action.typeOfRestaurant}

    case 'AddPickedVipSeats':

    return {...state, pickedVipSeats:action.pickedVipSeats}

    case 'AddCenterVipSeats':

    return {...state, pickedCenterSeats:action.pickedCenterSeats}

    case 'AddPickedBarSeats':

    return {...state, pickedBarSeats:action.pickedBarSeats}

    case 'AddFirstName':

    return {...state, firstName:action.firstName}

    case 'AddPhone':

    return {...state, phone:action.phone}

    case 'AddEmail':

    return {...state, email:action.email}

    default:
        return state
    }

    
}
type DownloadCitiesActionType = {
    type:typeof DownloadCities,
    cities:[]
}

const store = createStore(reducer, applyMiddleware(thunk))

render(
    <React.StrictMode>
        <Provider store={store}>
            <Global/>
            <App/>
        </Provider>
    </React.StrictMode>,
document.getElementById('root')
)

export const DownloadCitiesAction = (cities:[]):DownloadCitiesActionType => ({type: DownloadCities, cities})
export const DownloadCategoriesAction = (categories) => ({type:DownloadCategories, categories})
export const DownloadCategory1Action = (category1) => ({type:DownloadCategory1, category1})
export const DownloadCategory2Action = (category2) => ({type:DownloadCategory2, category2})
export const DownloadCategory3Action = (category3) => ({type:DownloadCategory3, category3})
export const DownloadRestaurantsAction = (restaurants) => ({type:DownloadRestaurants, restaurants})