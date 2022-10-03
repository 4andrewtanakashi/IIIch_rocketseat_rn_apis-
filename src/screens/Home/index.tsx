import React from 'react'
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'

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

  const navigation = useNavigation()

  const carDataI = {
    brand: 'audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'ao dia',
      price: 120000
    },
    thumbnail: 'https://i.pinimg.com/originals/0b/7b/31/0b7b31c91bc9fd14fa0e5620bdb80731.png'
  }

  function handleCardDetails () {
    navigation.navigate('CardDetails')
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
          renderItem={ ({ item }) =>
            <Car data={carDataI} onPress={handleCardDetails}/>}
        />
        
    </Container>
  )
}