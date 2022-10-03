import React, { useState, useEffect } from 'react'
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'

import { api } from '../../services/api'
import Logo from '../../assets/logo.svg'
import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList
 } from './styles'
import { Car } from '../../components/Car'
import { Load } from '../../components/Load'
import { CarDTO } from '../../dtos/CarDTO'

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const navigation = useNavigation()

  useEffect( () => {
    async function fetchCars () {
      try {
        const response = await api.get('/cars')
        setCars(response.data)
      } catch (error) {
        console.log(error as string)
      } finally {
        setIsLoading(false)
      }
    }
    fetchCars()
  }, [] )

  function handleCardDetails (car : CarDTO) {
    navigation.navigate('CardDetails', { car })
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
        {
          isLoading? <Load />
          :
          <CarList
            data={cars}
            keyExtractor={ item => item.id}
            renderItem={ ({ item }) =>
              <Car data={item} onPress={() => handleCardDetails(item)}/>}
          />
        }
        
    </Container>
  )
}