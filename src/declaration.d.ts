import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        main:string,
        theme:string,
        accent:boolean,
        absolute:boolean,
        big:boolean,
        yellowShadow:boolean,
        greenShadow:boolean,
        bigGap:boolean,
        shadowSmallOrange:boolean,
        shadowSmallGreen:boolean,
        small:boolean,
        smaller:boolean,
        paddingSmallest:boolean,
        smallestGap:boolean,
        biggerGap:boolean,
        biggestGap:boolean,
        paddingBig:boolean,
        counterWidth:boolean,
        counterHeight:boolean,
        darkened:boolean;
        inactive:boolean,
        width:string,
        display:string,
        direction:string,
        align:string,
        justify:string,
        margin:string,
        padding:string,
        borderRadius:string,
        border:string,
        background:string,
        backgroundColor:string,
        backgroundImage:string,
        shadow:string,
        size:string,
        scale:string,
        height:string,
        zIndex:string,
        textAlign:string,
        minHeight:string,
        overflow:string,
        position:string,
        gap:string,
        pointerEvents:string,
        transition:string
    }
  }

export interface State{
  categories:object,
  cities:object,
  date:object,
  email:string,
  firstName:string,
  orderCity:string,
  orderList:object,
  phone:string,
  pickedBarSeats:number[],
  pickedVipSeats:number[],
  pickedCenterSeats:number[],
  restaurant:string[],
  restaurants:object[],
  time:string,
  typeOfRestaurant:string,
  Напиток:object,
  Блюдо:object,
  Десерт:object,

}

export interface orderItem{
  firstCustom:object,
  secondCustom:object,
  type:string,
  item:string,
  cost:number,
  amount:number,
  totalCost:number
}

export interface currentRestaurants{
  bar:anyRestaurant,
  cafe:anyRestaurant,
  restaurant:anyRestaurant
}

export interface anyRestaurant{
  name:string,
  type:string,
  rusType:string,
  style:string,
  artist:string,
  vipSeats:number[],
  occupiedVipSeats:number[],
  centerSeats:number[],
  occupiedCenterSeats:number[],
  barSeats:number[],
  occupiedBarSeats:number[],
  vipPrice:number,
  barPrice:number,
  centerPrice:number

}

export interface Item{
  name:string,
  custom:object,
  photo:string,
  cost:number
}

export type ListKey={
  name:string
}

export interface List{
  name:string,
  custom:object,
  cost:number
}
export  type Place={
  type:string
}
declare module '*.png'
declare module '*.module.scss'
declare module '*.scss'