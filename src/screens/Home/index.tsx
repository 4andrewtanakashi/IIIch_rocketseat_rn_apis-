import React from 'react'
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg'
import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList
 } from './styles'

import { Car } from '../../components/Car'

export function Home() {
  const carDataI = {
    brand: 'audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'ao dia',
      price: 120000
    },
    thumbnail: 'https://i.pinimg.com/originals/0b/7b/31/0b7b31c91bc9fd14fa0e5620bdb80731.png'
  }

  const carDataII = {
    brand: 'porsche',
    name: 'Panamera',
    rent: {
      period: 'ao dia',
      price: 3400000
    },
    thumbnail: 'https://www.evspecifications.info/wp-content/uploads/2020/01/Porsche-Panamera-4-e-hybrid-evchargeplus-00-1-1-1024x680.png'
  }

  return (
    <Container>
        <StatusBar
          barStyle='light-content'
          backgroundColor={'transparent'}
          translucent
        />
        <Header>
          <HeaderContent>
            <Logo 
              width={RFValue(108)}
              height={RFValue(12)}
            />
            <TotalCars>
              Total de 12 carros
            </TotalCars>
          </HeaderContent>
        </Header>
        <CarList
          data={[1, 2, 3, 4, 5, 6, 7]}
          keyExtractor={ ({item}) => String (item)}
          renderItem={ ({ item }) => <Car data={carDataI}/>}
        />
        
    </Container>
  )
}