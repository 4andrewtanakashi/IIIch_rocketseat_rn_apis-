import React from 'react'

import {
  Container,
  Header,
  CarImageWarapper,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About
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

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <About>
          Este é automóvel desportivo.
          Surgiu do lendário touro de lide indultado
          na praça Real Maestranza de Sevilla.
          É um belíssimo carro para quem gosta de acelerar.
        </About>
      </Content>
    </Container>
  )
}