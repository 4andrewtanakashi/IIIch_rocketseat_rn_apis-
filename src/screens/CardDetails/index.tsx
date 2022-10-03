import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

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
  About,
  Accessories,
  Footer
} from './styles'
import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider/'
import { Accessory } from '../../components/Accessory'
import { Button } from '../../components/Button'
import { CarDTO } from '../../dtos/CarDTO'

import SpeedSvg from '../../assets/speed.svg'
import AccelerationSvg from '../../assets/acceleration.svg'
import ForceSvg from '../../assets/force.svg'
import GasolineSvg from '../../assets/gasoline.svg'
import ExchangeSvg from '../../assets/exchange.svg'
import PeopleSvg from '../../assets/people.svg'

interface Params {
  car: CarDTO
}

export function CardDetails () {
  const navigation = useNavigation()
  const route = useRoute()

  const { car } = route.params as Params

  function handleConfirmRental () {
    navigation.navigate('Scheduling')
  }

  function handleBack () {
    navigation.goBack()
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack}/>
      </Header>

      <CarImageWarapper>
        <ImageSlider 
          imageUrl={car.photos}
        />
      </CarImageWarapper>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {
            car.accessories.map( accesory => (
              <Accessory
                key={accesory.type}
                name={accesory.name}
                icon={SpeedSvg}
              />
            ) )
          }
        </Accessories>

        <About>{car.about}</About>

      </Content>
      <Footer>
          <Button title={'Escolher período do aluguel'} onPress={handleConfirmRental}/>
      </Footer>
    </Container>
  )
}