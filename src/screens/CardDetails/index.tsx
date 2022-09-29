import React from 'react'

import {
  Container,
  Header,
  CarImageWarapper
} from './styles'
import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider/'

export function CardDetails () {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}}/>
      </Header>

      <CarImageWarapper>
        <ImageSlider 
          imageUrl={['https://www.evspecifications.info/wp-content/uploads/2020/01/Porsche-Panamera-4-e-hybrid-evchargeplus-00-1-1-1024x680.png']}
        />
      </CarImageWarapper>
    </Container>
  )
}