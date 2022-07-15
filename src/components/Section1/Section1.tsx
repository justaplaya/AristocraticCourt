import React from 'react'
import Button from '../Tools/Button/Button'
import Section from '../Tools/Section/Section'
import Container from '../Tools/Container/Container'
import Title from '../Tools/Title/Title'
import Subtitle from '../Tools/Subtitle/Subtitle'

const Section1 = function(){

   return(
       <Section background={'rgb(255,200,50)'}>
           <Container yellowShadow>
               <Title>
                   Приветствуем Вас в
                   <br/>
                   <i>Aristocratic Court — </i>
                   <br/>
                   развлекательно-пищевой сети для истинных гурманов
                </Title>
               <Subtitle big>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, odit veritatis labore tempora exercitationem vitae?
                </Subtitle>
                <Button big href={'#2'}>
                    Начнём!
                </Button>
           </Container>
       </Section>
   )

   }
export default Section1


