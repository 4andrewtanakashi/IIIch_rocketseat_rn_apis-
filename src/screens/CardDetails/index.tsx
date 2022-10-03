import React from 'react'
import { useNavigation } from '@react-navigation/native'

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

import SpeedSvg from '../../assets/speed.svg'
import AccelerationSvg from '../../assets/acceleration.svg'
import ForceSvg from '../../assets/force.svg'
import GasolineSvg from '../../assets/gasoline.svg'
import ExchangeSvg from '../../assets/exchange.svg'
import PeopleSvg from '../../assets/people.svg'

export function CardDetails () {

  const navigation = useNavigation()

  function handleConfirmRental () {
    navigation.navigate('Scheduling')
  }

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

        <Accessories>
          <Accessory name={'380km/h'} icon={SpeedSvg} />
          <Accessory name={'3.2s'} icon={AccelerationSvg} />
          <Accessory name={'800 HP'} icon={ForceSvg} />
          <Accessory name={'Gasolina'} icon={GasolineSvg} />
          <Accessory name={'Auto'} icon={ExchangeSvg} />
          <Accessory name={'2 pessoas'} icon={PeopleSvg} />
        </Accessories>

        <About>
          Este é automóvel desportivo.
          Surgiu do lendário touro de lide indultado
          na praça Real Maestranza de Sevilla.
          É um belíssimo carro para quem gosta de acelerar.
        </About>

      </Content>
      <Footer>
          <Button title={'Escolher período do aluguel'} onPress={handleConfirmRental}/>
      </Footer>
    </Container>
  )
}