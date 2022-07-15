import React, { useState } from 'react'
import styles from './Section6.module.scss'
import Button from '../Tools/Button/Button'
import Section from '../Tools/Section/Section'
import Container from '../Tools/Container/Container'
import Title from '../Tools/Title/Title'
import Input from '../Tools/Input/Input'
import Flex from '../Tools/Flex/Flex'
import { useDispatch, useSelector } from 'react-redux';
import {State,orderItem} from '../../declaration'

const Section6 = () => {
  // объявление переменных
const dispatch = useDispatch()

const vipSeats = useSelector((state:State)=>state.pickedVipSeats)
const centerSeats = useSelector((state:State)=>state.pickedCenterSeats)
const barSeats = useSelector((state:State)=>state.pickedBarSeats)

const orderList = useSelector((state:State)=>state.orderList)
const restaurants = useSelector((state:State)=>state.restaurants)
const orderCity = useSelector((state:State)=>state.orderCity)
const typeOfRestaurant = useSelector((state:State)=>state.typeOfRestaurant)

const [firstNameIsEmpty, setFirstNameIsEmpty] = useState<boolean>(false)
const [phoneIsEmpty, setPhoneIsEmpty] = useState<boolean>(false)
const [emailIsEmpty, setEmailIsEmpty] = useState<boolean>(false)
// подсчёт суммы к уплате
let sum = 0
    if(typeOfRestaurant.length != 0){
        let order = {} as orderItem
        for(order of Object.values(orderList)){
           sum+=order.totalCost
        }
            sum+=(restaurants[0][orderCity][typeOfRestaurant].vipPrice * vipSeats.length)
            sum+=(restaurants[0][orderCity][typeOfRestaurant].centerPrice * centerSeats.length)
            sum+=(restaurants[0][orderCity][typeOfRestaurant].barPrice * barSeats.length)
    }
    // ппроверка на пустые поля перед отправкой
function checkIsEmpty(){
  let firstName = document.getElementById('firstName') as HTMLInputElement | null
  let phone = document.getElementById('phone') as HTMLInputElement | null
  let email = document.getElementById('email') as HTMLInputElement | null
  if(firstName.value.length == 0){
    setFirstNameIsEmpty(true)
  } 
  if(firstName.value.length != 0){
    setFirstNameIsEmpty(false)
  } 
  if(phone.value.length == 0){
    setPhoneIsEmpty(true)
  }
  if(phone.value.length != 0){
    setPhoneIsEmpty(false)
  }
  if(email.value.length == 0){
    setEmailIsEmpty(true)
  }
  if(email.value.length != 0){
    setEmailIsEmpty(false)
  }
  // диспатчим поля в редусер, если все они заполнены
  if(firstName.value.length != 0 &&
    phone.value.length != 0 && 
    email.value.length != 0){
        document.getElementById('7').scrollIntoView()
        dispatch({type:'AddFirstName',firstName:firstName.value})
        dispatch({type:'AddPhone',phone:phone.value})
        dispatch({type:'AddEmail',email:email.value})
  }
}

    return(
        <Section background={'rgb(50,255,150)'} className={styles.section6}>
          <Title color={'rgb(34,34,34)'}>Укажите Ваши данные</Title>
             <Container greenShadow>
                
                    <Title small htmlFor="firstName">Имя</Title>
                    <Input className={firstNameIsEmpty ? styles.field + ' ' + styles.empty: styles.field} id="firstName" name="firstName" placeholder="Григорий"/>
                    <Title small htmlFor="phone">Телефон</Title>
                    <Input className={phoneIsEmpty ? styles.field + ' ' + styles.empty: styles.field} id="phone" name="phone" type="tel" placeholder="+71234567890"/>
                    <Title small htmlFor="email">Email</Title>
                    <Input
                    className={emailIsEmpty ? styles.field + ' ' + styles.empty: styles.field}
                      id="email"
                      name="email"
                      placeholder="fivenine@gray.com"
                      type="email"
                    />
                      <Button id="submit" onClick={checkIsEmpty} type="submit">Оплатить {sum}$</Button>
                
              </Container>
        </Section>
    )
}
//!убрал флекс
export default  Section6