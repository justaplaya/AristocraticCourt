import React from 'react'
import { useSelector } from 'react-redux'
import Section from '../Tools/Section/Section'
import Container from '../Tools/Container/Container'
import Title from '../Tools/Title/Title'
import Flex from '../Tools/Flex/Flex'
import {State, orderItem} from '../../declaration'

const Section7 = () => {
// объявление переменных к выводу
const firstName = useSelector((state:State)=>state.firstName)
const orderList = useSelector((state:State)=>state.orderList)
const date = useSelector((state:State)=>state.date)
const time = useSelector((state:State)=>state.time)
const orderCity = useSelector((state:State)=>state.orderCity)
const typeOfRestaurant = useSelector((state:State)=>state.typeOfRestaurant)
const restaurant = useSelector((state:State)=>state.restaurant)
const vipSeats = useSelector((state:State)=>state.pickedVipSeats).sort()
const centerSeats = useSelector((state:State)=>state.pickedCenterSeats).sort()
const barSeats = useSelector((state:State)=>state.pickedBarSeats).sort()

    return(
        <Section background={'rgb(255,200,50)'} height={'fit-content'} minHeight={'100vh'}>
            <Title color={'rgb(34,34,34)'}>Благодарим за заказ, <br></br>{firstName}</Title>
            <Title small color={'rgb(34,34,34)'}>Ниже представлены Ваши покупки:</Title>
            {Object.values(orderList).map((order:orderItem) => 
            <Container key={order.item + order.amount} yellowShadow >
                <Title key={order.item} small>{order.item}</Title>
                {Object.values(order.firstCustom).length!=0 ? <Title key={Object.values(order.firstCustom).join('')} small>{Object.keys(order.firstCustom)}: {Object.values(order.firstCustom)}</Title> : null}
                {Object.values(order.secondCustom).length!=0 ? <Title key={Object.values(order.secondCustom).join('')} small>{Object.keys(order.secondCustom)}: {Object.values(order.secondCustom)}</Title> : null}
                <Title key={order.amount} small>Количество: {order.amount}</Title>
                </Container>)}
            <Title 
            color={'rgb(34,34,34)'} 
            small>
                Всё это будет ждать Вас в {typeOfRestaurant == 'bar' ? 'баре' : typeOfRestaurant == 'restaurant' ? 'ресторане' : 'кафе'} под названием {restaurant} города {orderCity} 
                {vipSeats.length!=0 || barSeats.length!=0 || centerSeats.length!=0 ? <p>на</p> : null}
                {vipSeats.length!=0 ? 
            <Flex 
            direction={'row'}>
                VIP-местах номер 
                {Object.values(vipSeats).map(seat=>
                <p key={'vip'+seat}>{vipSeats.length == Number(vipSeats.indexOf(seat))+1 
                    ? <>{seat} </> : 
                    <>{seat}, </>}</p>            
            )}
            </Flex> : 
            null}
            {barSeats.length!=0 ? 
            <Flex 
            direction={'row'}>
                местах у бара номер 
                {Object.values(barSeats).map(seat=>
                <p key={'bar'+seat}>{barSeats.length == Number(barSeats.indexOf(seat))+1 
                    ? <>{seat} </> : 
                    <>{seat}, </>}</p>            
            )}
            </Flex> : 
            null}
            {centerSeats.length!=0 ? 
            <Flex 
            direction={'row'}>
                местах в центре номер 
                {Object.values(centerSeats).map(seat=>
                <p key={'center'+seat}>{centerSeats.length == Number(centerSeats.indexOf(seat))+1 
                    ? <>{seat} </> : 
                    <>{seat}, </>}</p>            
            )}
            </Flex> : 
            null}
            </Title>
                    <Flex direction={'row'} >  
                            <Flex direction={'row'} padding={'0'} gap={'0'}>  
                                { Object.entries(date).map(datePart => 
                                        <Title small color={'rgb(34,34,34)'} key={datePart[0]+datePart[1]}>
                                            {datePart[0] == 'year' ? <>{datePart[1]}</> : <>{datePart[1]}.</>}
                                        </Title>
                                )} 
                            </Flex> 
                        <Title small color={'rgb(34,34,34)'}>в {time}</Title>
                    </Flex> 

        </Section>
    )
}

export default Section7
