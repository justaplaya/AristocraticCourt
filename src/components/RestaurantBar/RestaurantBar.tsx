import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './RestaurantBar.module.scss'
import Button from '../Tools/Button/Button'
import Subtitle from '../Tools/Subtitle/Subtitle'
import Flex from '../Tools/Flex/Flex'

const RestaurantBar = ({restaurant}) => {
// определение количества мест на основании полученного к выводу ресторана, объявление стэйтов уже выбранных мест и установка лимита мест к выбору
    const dispatch = useDispatch()
    const [seatLimit,setSeatLimit] = useState<number>(5)
    const [pickedVipSeats,setPickedVipSeats] = useState<number[]>([])
    const [pickedBarSeats,setPickedBarSeats] = useState<number[]>([])
    const [pickedCenterSeats,setPickedCenterSeats] = useState<number[]>([])
    const occupiedVipSeats = restaurant.occupiedVipSeats
    const occupiedCenterSeats = restaurant.occupiedCenterSeats
    const occupiedBarSeats = restaurant.occupiedBarSeats
    // функция выбора места
function chooseSeat(event){
    let totalSeats = pickedVipSeats.length + pickedBarSeats.length + pickedCenterSeats.length
    event.target.getAttribute('data-zone') == 'vip' ? 
    pickedVipSeats.includes(Number(event.target.getAttribute('data-value'))) ?
    setPickedVipSeats(pickedVipSeats.filter(seat=>seat!=Number(event.target.getAttribute('data-value')))) :
    totalSeats < seatLimit ?
    setPickedVipSeats([...pickedVipSeats, Number(event.target.getAttribute('data-value'))]) :
    null :
    event.target.getAttribute('data-zone') == 'bar' ?
    pickedBarSeats.includes(Number(event.target.getAttribute('data-value'))) ?
    setPickedBarSeats(pickedBarSeats.filter(seat=>seat!=Number(event.target.getAttribute('data-value')))) :
    totalSeats < seatLimit ?
    setPickedBarSeats([...pickedBarSeats, Number(event.target.getAttribute('data-value'))]) :
    null :
    pickedCenterSeats.includes(Number(event.target.getAttribute('data-value'))) ?
    setPickedCenterSeats(pickedCenterSeats.filter(seat=>seat!=Number(event.target.getAttribute('data-value')))) :
    totalSeats < seatLimit ?
    setPickedCenterSeats([...pickedCenterSeats, Number(event.target.getAttribute('data-value'))]) :
    null
}
// диспатчим выбранные места в редусер
function uploadPickedSeatsToStore(){
dispatch({type:'AddPickedVipSeats',pickedVipSeats:pickedVipSeats})
dispatch({type:'AddCenterVipSeats',pickedCenterSeats:pickedCenterSeats})
dispatch({type:'AddPickedBarSeats',pickedBarSeats:pickedBarSeats})
}

return(
    <>
    <div className={styles.restaurantContainer}>
        <div className={styles.firstRow}>
            <div className={styles.vipZoneWrapper}>
                <div className={styles.vipZone}>
                    <div className={styles.vipFirstRow}>
                    <div data-value="1" data-zone='vip' onClick={chooseSeat} 
                    className={pickedVipSeats.includes(1) ? styles.seat + ' ' + styles.picked : 
                        occupiedVipSeats.includes(1) ? styles.seat + ' ' + styles.occupied : styles.seat}
                        >1</div>
                    </div>
                    <div className={styles.vipSecondRow}>
                    <div data-value="2" data-zone='vip' onClick={chooseSeat} 
                   className={pickedVipSeats.includes(2) ? styles.seat + ' ' + styles.picked : 
                    occupiedVipSeats.includes(2) ? styles.seat + ' ' + styles.occupied : styles.seat}
                    >2</div>
                    <div className={styles.table}></div>
                    <div data-value="3" data-zone='vip' onClick={chooseSeat}
                    className={pickedVipSeats.includes(3) ? styles.seat + ' ' + styles.picked : 
                    occupiedVipSeats.includes(3) ? styles.seat + ' ' + styles.occupied : styles.seat}
                    >3</div>
                    </div>
                    <div className={styles.vipThirdRow}>
                    <div data-value="4" data-zone='vip' onClick={chooseSeat} 
                    className={pickedVipSeats.includes(4) ? styles.seat + ' ' + styles.picked : 
                    occupiedVipSeats.includes(4) ? styles.seat + ' ' + styles.occupied : styles.seat}
                    >4</div>
                    </div>
                </div>
            </div>
            
            <div className={styles.wc}>WC</div>
        </div>
        <div className={styles.corridor}></div>
        <div className={styles.secondRow}>
            <div className={styles.centerZoneWrapper}>
                <div className={styles.centerZone}>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableFirstRow}>
                        <div data-value="1" data-zone='center' onClick={chooseSeat} 
                        className={pickedCenterSeats.includes(1) ? styles.seat + ' ' + styles.picked : 
                        occupiedCenterSeats.includes(1) ? styles.seat + ' ' + styles.occupied : styles.seat}
                        >1</div>
                        </div>
                        <div className={styles.tableSecondRow}>
                        <div data-value="2" data-zone='center' onClick={chooseSeat} 
                        className={pickedCenterSeats.includes(2) ? styles.seat + ' ' + styles.picked : 
                        occupiedCenterSeats.includes(2) ? styles.seat + ' ' + styles.occupied : styles.seat}
                        >2</div>
                            <div className={styles.table}></div>
                            <div data-value="3" data-zone='center' onClick={chooseSeat} 
                            className={pickedCenterSeats.includes(3) ? styles.seat + ' ' + styles.picked : 
                            occupiedCenterSeats.includes(3) ? styles.seat + ' ' + styles.occupied : styles.seat}
                            >3</div>
                        </div>
                        <div className={styles.tableThirdRow}>
                        <div data-value="4" data-zone='center' onClick={chooseSeat} 
                        className={pickedCenterSeats.includes(4) ? styles.seat + ' ' + styles.picked : 
                        occupiedCenterSeats.includes(4) ? styles.seat + ' ' + styles.occupied : styles.seat}
                        >4</div>
                        </div>
                    </div>
                    <div className={styles.tableContainer}>
                        <div className={styles.tableFirstRow}>
                        <div data-value="5" data-zone='center' onClick={chooseSeat} 
                        className={pickedCenterSeats.includes(5) ? styles.seat + ' ' + styles.picked : 
                        occupiedCenterSeats.includes(5) ? styles.seat + ' ' + styles.occupied : styles.seat}
                        >5</div>
                        </div>
                        <div className={styles.tableSecondRow}>
                        <div data-value="6" data-zone='center' onClick={chooseSeat} 
                        className={pickedCenterSeats.includes(6) ? styles.seat + ' ' + styles.picked : 
                        occupiedCenterSeats.includes(6) ? styles.seat + ' ' + styles.occupied : styles.seat}
                        >6</div>
                            <div className={styles.table}></div>
                            <div data-value="7" data-zone='center' onClick={chooseSeat} 
                            className={pickedCenterSeats.includes(7) ? styles.seat + ' ' + styles.picked : 
                            occupiedCenterSeats.includes(7) ? styles.seat + ' ' + styles.occupied : styles.seat}
                            >7</div>
                        </div>
                        <div className={styles.tableThirdRow}>
                        <div data-value="8" data-zone='center' onClick={chooseSeat} 
                        className={pickedCenterSeats.includes(8) ? styles.seat + ' ' + styles.picked : 
                        occupiedCenterSeats.includes(8) ? styles.seat + ' ' + styles.occupied : styles.seat}
                        >8</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.barZoneWrapper}>
                <div className={styles.barZone}>
                    <div>
                        <div className={styles.barFirstColumnSeats}>
                        <div data-value="1" data-zone='bar' onClick={chooseSeat} 
                        className={pickedBarSeats.includes(1) ? styles.seat + ' ' + styles.picked : 
                        occupiedBarSeats.includes(1) ? styles.seat + ' ' + styles.occupied : styles.seat}
                        >1</div>
                        <div data-value="2" data-zone='bar' onClick={chooseSeat} 
                        className={pickedBarSeats.includes(2) ? styles.seat + ' ' + styles.picked : 
                        occupiedBarSeats.includes(2) ? styles.seat + ' ' + styles.occupied : styles.seat}
                        >2</div>
                        <div data-value="3" data-zone='bar' onClick={chooseSeat} 
                        className={pickedBarSeats.includes(3) ? styles.seat + ' ' + styles.picked : 
                        occupiedBarSeats.includes(3) ? styles.seat + ' ' + styles.occupied : styles.seat}
                        >3</div>
                        <div data-value="4" data-zone='bar' onClick={chooseSeat} 
                        className={pickedBarSeats.includes(4) ? styles.seat + ' ' + styles.picked : 
                        occupiedBarSeats.includes(4) ? styles.seat + ' ' + styles.occupied : styles.seat}
                        >4</div>
                        </div>
                    </div>
                    <div className={styles.barSecondColumn}>
                        <div className={styles.barItself}>
                            <div className={styles.barEmptySpace}></div>
                        </div>
                        <div className={styles.barSecondColumnSeats}>
                        <div data-value="5" data-zone='bar' onClick={chooseSeat} 
                        className={pickedBarSeats.includes(5) ? styles.seat + ' ' + styles.picked : 
                        occupiedBarSeats.includes(5) ? styles.seat + ' ' + styles.occupied : styles.seat}
                        >5</div>
                        <div data-value="6" data-zone='bar' onClick={chooseSeat} 
                        className={pickedBarSeats.includes(6) ? styles.seat + ' ' + styles.picked : 
                        occupiedBarSeats.includes(6) ? styles.seat + ' ' + styles.occupied : styles.seat}
                        >6</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.sceneZone}>
            <div className={styles.scene}>Сцена</div>
        </div>
    </div>
    <Flex direction={'row'} >
        <Flex paddingSmallest direction={'row'}>
            <div className={styles.vipPrice}></div>
            <Subtitle>VIP<br></br>{restaurant.vipPrice}$</Subtitle>
        </Flex>
        <Flex paddingSmallest direction={'row'}>
            <div className={styles.barPrice}></div>
            <Subtitle>Бар<br></br>{restaurant.barPrice}$</Subtitle>
        </Flex>
        <Flex paddingSmallest direction={'row'}>
            <div className={styles.centerPrice}></div>
            <Subtitle>Центр<br></br>{restaurant.centerPrice}$</Subtitle>
        </Flex>
    </Flex>
    <Button onClick={uploadPickedSeatsToStore} href="#6">Пойдёмте же дальше</Button>
</>
)
}

export default RestaurantBar