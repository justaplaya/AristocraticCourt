import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../Tools/Button/Button'
import Section from '../Tools/Section/Section'
import Container from '../Tools/Container/Container'
import Title from '../Tools/Title/Title'
import Input from '../Tools/Input/Input'
const Section4 = () => {

const dispatch = useDispatch()
// объявляем константы даты и времени
    const [date,setDate] = useState<object>({})
    const [time,setTime] = useState<string>('')
// определяем текущую дату и обрабатываем её
    let rawCurrentDate = new Date()
    let currentDay:string = String(rawCurrentDate.getDate())
    if(String(currentDay).length < 2){
        currentDay = `0${rawCurrentDate.getDate()}`
    }
    let currentMonth:string = String(rawCurrentDate.getMonth()+1)
    if(String(currentMonth).length < 2){
        currentMonth = `0${rawCurrentDate.getMonth()+1}`
    }
    let currentYear = rawCurrentDate.getFullYear()
    let maxMonth = 0+String(Number(currentMonth)+1)
// считываем и обрабатываем выбранную дату и время
    function figureDateAndTime(){
        let inputDate = document.querySelector('input[type=date]') as HTMLInputElement | null
        let rawDate:string[]
        if(inputDate!=null){
             rawDate = inputDate.value.split('-').reverse()
        }
        let preDate = {
             "day":rawDate[0],
             "month":rawDate[1],
             "year":rawDate[2]
         }
         let inputTime = document.querySelector('input[type=time]') as HTMLInputElement | null
         let time:string
         if(inputTime!=null){
             time = inputTime.value

         }
        setDate(preDate)
        setTime(time)
    }
// слушатель, диспатчащий дату и время по факту изменения 1 из них
    useEffect(()=>{
        dispatch({type:'AddDate',date:date})
        dispatch({type:'AddTime',time:time})
    },[date,time])

    return(
        <Section 
        background={'rgb(50,255,150)'}>
            <Title color={'rgb(34,34,34)'}>Выберите дату и время визита</Title>
            <Container 
            greenShadow
            bigGap>
            <Input type="date" 
            dafaultvalue={currentYear+'-'+currentMonth+'-'+currentDay}
            min={currentYear+'-'+currentMonth+'-'+currentDay} 
            max={currentYear+'-'+maxMonth+'-'+currentDay} 
            ></Input>
            <Input type="time"></Input>
           <Button href="#5" onClick={()=>figureDateAndTime()}>Так точно</Button>
            </Container>
        </Section>
    )
}

export default Section4