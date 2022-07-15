import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import categories from '../Actions/Categories'
import category1 from '../Actions/Category1'
import category2 from '../Actions/Category2'
import category3 from '../Actions/Category3'
import Counter from '../Counter/Counter'
import styles from './Section3.module.scss'
import Button from '../Tools/Button/Button'
import Section from '../Tools/Section/Section'
import Container from '../Tools/Container/Container'
import Title from '../Tools/Title/Title'
import Subtitle from '../Tools/Subtitle/Subtitle'
import Flex from '../Tools/Flex/Flex'
import {State, orderItem, Item, ListKey, List} from '../../declaration'


const Section3 = function(){

const dispatch = useDispatch()
const [upperTitle, setUpperTitle] = useState<string>('First pick a type of component')
const [typeIsChosen, setTypeIsChosen] = useState<boolean>(false)
const [itemIsChosen, setItemIsChosen] = useState<boolean>(false)
const [customIsChosen, setCustomIsChosen] = useState<boolean>(false)
const [itemsToShow, setItemsToShow] = useState<Item[]>([])
const [firstCustomToShow, setFirstCustomToShow] = useState<object>({'':[]})
const [secondCustomToShow, setSecondCustomToShow] = useState<object>({'':[]})
const [descriptions, setDescriptions] = useState<[]>([])
const [description, setDescription] = useState<string>('')
const [showDescription,setShowDescription] = useState<boolean>(false)
const [orderItem, setOrderItem] = useState<orderItem>(
    {
        firstCustom:{},
        secondCustom:{},
        type:'',
        item:'',
        cost:0,
        amount:0,
        totalCost:0
    }
    )
const [orderList, setOrderList] = useState<object>({})
const [orderListIndex,setOrderListIndex] = useState<number>(1)
const fullStore = useSelector((state:State)=>state)
// выгружаем категории и их список по факту загрузки
window.addEventListener('DOMContentLoaded', downloadAllGoodsByAction)
function downloadAllGoodsByAction(){
    dispatch<any>(categories())
    dispatch<any>(category1())
    dispatch<any>(category2())
    dispatch<any>(category3())
}
// обозначаем переменные для последующего перебора массива категорий
const RawStoreCategories = useSelector((state:State) => state.categories)
let preStoreCategories = []
let storeCategories = []
// если категории выгрузились, то исключаем те, в которых не осталось не выбранных устройств
if(Object.keys(RawStoreCategories).length > 0){
    preStoreCategories = Object.keys(RawStoreCategories[0].categories)
    const pickedTypes = Object.values(orderList).map(order => order.type)
    const typesForRemoval = preStoreCategories.filter(preCat => {
        let i = 0
        pickedTypes.map(
            function(type){
                if(type == preCat){
                    i++
                }
            }
        )
        if(i == preStoreCategories.length){
            return preCat
        }
    })
    storeCategories = preStoreCategories.filter(e=>!typesForRemoval.includes(e))
    /*for(let cat in RawStoreCategories[0].categories){
console.log(cat)
    }*/
    //console.log(RawStoreCategories[0].categories)
}
// функция выбора типа устройства
function chooseType(event) {
    setOrderItem({...orderItem, type:event.target.getAttribute('data-type')})
    setTypeIsChosen(true)
}
// функция выбора устройства
function chooseItem(event){
    setOrderItem({...orderItem, item:event.target.getAttribute('data-item'), cost:Number(event.target.getAttribute('data-cost'))})
    setItemIsChosen(true)
}
// функция определения устройств к выбору
function figureitemsToShow(){
    const pickedItems = Object.values(orderList).map(order => order.item)
    for(let itemType in fullStore){
        if(itemType == orderItem.type){
            let base = Object.values(fullStore[itemType]).filter((item:Item)=>!pickedItems.includes(item.name)) as Item[] 
            setItemsToShow(base)
        }
    }
}

// функция определения настроек к выбору
function figureCustom(){
    for(let key in fullStore){
        if(key == orderItem.type){
            let preList = Object.values(fullStore[key])
            let list={
                name:'',
                custom:{},
                cost:0
            } as List
            list = preList.filter((listKey:ListKey) => listKey.name == orderItem.item)[0] as List 
            setFirstCustomToShow({[Object.entries(list.custom)[0][0]]:Object.entries(list.custom)[0][1]}) 
            setSecondCustomToShow({[Object.entries(list.custom)[1][0]]:Object.entries(list.custom)[1][1]}) 
            setDescriptions(fullStore[orderItem.type][orderItem.item].custom.descriptions)
        }
    }
}
// функция добавления товара в корзину
function addOrderItemToStore(){
    if(orderItem.amount > 0){
    setOrderListIndex(orderListIndex+1)
    setOrderList({...orderList,[orderListIndex]:orderItem})
    setCustomIsChosen(true)
    }
}
// функция добавления количества и цены товару
const showAmount = (amount) => {
    setOrderItem({...orderItem, amount:amount, totalCost:orderItem.cost * amount})
}
//функция блокировки скролла при просмотре описания настройки товара
function showDescriptionFunc(descriptionNumber=0){
    setDescription(descriptions[descriptionNumber])
    if(showDescription){
        setShowDescription(false)
        document.body.style.overflow = 'auto'
        document.body.style.pointerEvents = 'all'
    }
    else{
        setShowDescription(true)
        document.body.style.overflow = 'hidden'
        document.body.style.pointerEvents = 'none'
    }
}
// функция сброса всех настроек секции по факту отправки товара в корзину
function reset(){
    setTypeIsChosen(false)
    setItemIsChosen(false)
    setCustomIsChosen(false)
    setItemsToShow([])
    setFirstCustomToShow({'':[]})
    setSecondCustomToShow({'':[]})
    setDescriptions([])
    setOrderItem({
        firstCustom:{},
        secondCustom:{},
        type:'',
        item:'',
        cost:0,
        amount:0,
        totalCost:0
    })
}

useEffect(()=>{  
    console.log(orderItem)
},[orderItem])
// слушатель, диспатчащий обновлённую корзину в редусер
useEffect(()=>{
dispatch({type:'UploadOrderList',orderList:orderList})
},[orderList])
// слушатели вызова функций определения списка устроств и их настроек к показу и изменения надписи-подсказки
useEffect(()=>{  
    figureitemsToShow()
    if(typeIsChosen){
    setUpperTitle('А именно?')
    }
    else{
        setUpperTitle('Что будете брать?')
    }
},[typeIsChosen])
useEffect(()=>{  
    figureCustom()
    if(itemIsChosen){
        setUpperTitle('Настройте Ваше блюдо')
        }
    if(typeIsChosen && !itemIsChosen){
        setUpperTitle('А именно?')
        }
},[itemIsChosen])
useEffect(()=>{  
    if(customIsChosen){
        setUpperTitle("Заказ добавлен!")
        }
},[customIsChosen])

    return(
<Section background={'rgb(255,200,50)'}>
<div className={showDescription ? styles.descriptionBody + ' ' + styles.active : styles.descriptionBody}>
    <div className={styles.cross} onClick={()=>showDescriptionFunc()}></div>
    <Subtitle color={'rgb(34,34,34)'}>{description}</Subtitle>
</div>

    <Title small color={'rgb(34,34,34)'}>{upperTitle}</Title>
    <Container height={'100%'} width={'100%'} yellowShadow>
        <Container 
        absolute
        zIndex={'4'}
        className={typeIsChosen ? 'active' : null}
        bigGap
        yellowShadow
        >
        { storeCategories.map(category => 
                <Button 
                width={'85vw'} 
                darkened
                inactive
                justify={'flex-end'} 
                align={'flex-start'} 
                height={'30%'} 
                shadow={'none'} 
                background={`url(${RawStoreCategories[0].categories[category].photo})`} 
                data-type={category} 
                onClick={()=>chooseType(event)} 
                key={category}                        
                className={orderItem.type == category ? 'active' : null}>
                <Title 
                data-type={category} 
                onClick={()=>chooseType(event)}>
                {category}                            
                </Title>
                    
            </Button>
            )}
        

         </Container>
        <Container 
        absolute
       zIndex={'3'}
       className={itemIsChosen ? 'active' : null}
       bigGap
        yellowShadow>
                        <Button accent onClick={()=>setTypeIsChosen(false)}>Назад</Button>

            {
                itemsToShow.map(item => 
                    <Button 
                        width={'85vw'} 
                        darkened
                        inactive
                        justify={'flex-end'} 
                        align={'flex-start'} 
                        height={'30%'} 
                        shadow={'none'} 
                        background={`url(${item.photo})`} 
                        data-item={item.name} 
                        data-cost={item.cost} 
                        onClick={()=>chooseItem(event)} 
                        key={item.name} 
                        className={orderItem.item == item.name ? 'active' : null}>
                            <Title data-name={item.name} onClick={()=>chooseItem(event)}>
                            {item.name} — {item.cost}$
                            </Title>
                            
                    </Button>
                    )
            }

        </Container>


        <Container
        absolute
        zIndex={'2'}
        className={customIsChosen ? 'active' : null}
        yellowShadow
        >
                   
                   <Button shadowSmallGreen accent 
                   onClick={()=> {setOrderItem({...orderItem, firstCustom:{},secondCustom:{}});setItemIsChosen(false)}} 
                   >Back</Button>
<Flex direction={'column'} shadow={'none'} background={'transparent'} paddingSmallest>
<Title small>{Object.keys(firstCustomToShow)}</Title>
<Flex shadow={'none'} direction={'row'} background={'transparent'}>


<Flex>
{Object.values(firstCustomToShow)[0].map(firstCustom =>
                <Button shadowSmallOrange key={firstCustom} data-name={firstCustom} 
                onClick={Object.values(orderItem.firstCustom)!=firstCustom ? ()=>setOrderItem({...orderItem, firstCustom:{[Object.keys(firstCustomToShow).join('')]:firstCustom}}) : null}
                className={Object.values(orderItem.firstCustom) == firstCustom ? 'active' : null}

               >
                    {firstCustom}</Button>
                )}
                </Flex>

                <div className={styles.descriptionBtn} onClick={()=>showDescriptionFunc(0)}>?</div>


                </Flex>

                </Flex>

<Flex paddingSmallest direction={'column'}  shadow={'none'}>
<Title small>{Object.keys(secondCustomToShow)}</Title>
<Flex shadow={'none'} direction={'row'} background={'transparent'}>

<Flex>
{Object.values(secondCustomToShow)[0].map(secondCustom =>
                <Button shadowSmallOrange key={secondCustom} data-name={secondCustom} 
                onClick={Object.values(orderItem.secondCustom)!=secondCustom ? ()=>setOrderItem({...orderItem, secondCustom:{[Object.keys(secondCustomToShow).join('')]:secondCustom}}) : null}
                className={Object.values(orderItem.secondCustom) == secondCustom ? 'active' : null}

               >
                    {secondCustom}</Button>
                )}

</Flex>


<div className={styles.descriptionBtn} onClick={()=>showDescriptionFunc(1)}>?</div>



                </Flex>

</Flex>

<Flex paddingSmallest direction={'row'} shadow={'none'} background={'transparent'}>
<Title small>Количество</Title>
                <Counter onChange={orderListIndex} onClick={showAmount}/>
</Flex>
                   
                   <Button shadowSmallGreen accent onClick={()=>addOrderItemToStore()}>Добавить в корзину</Button>
        </Container>





        <Container
        bigGap
        absolute
        zIndex={'1'}
        yellowShadow>
            <Title>Добавить ещё?</Title>
            <Button accent onClick={reset}>Вернёмся назад</Button>
           <Button href="#4" onClick={reset}>Давайте дальше</Button>
        </Container>
    </Container>
</Section>

    )

}

export default Section3