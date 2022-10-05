import React, { useState, useEffect } from 'react'
import { BackHandler, StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { PanGestureHandler } from 'react-native-gesture-handler'
import {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from 'react-native-reanimated'

import { useTheme } from 'styled-components'
import { api } from '../../services/api'
import Logo from '../../assets/logo.svg'
import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList,
  MyCarsButton,
  MyCarsButtonWrapper
 } from './styles'
import { Car } from '../../components/Car'
import { LoadingAnimation } from '../../components/LoadingAnimation'
import { CarDTO } from '../../dtos/CarDTO'

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const positionY = useSharedValue(0)
  const positionX = useSharedValue(0)

  const navigation = useNavigation()
  const theme = useTheme()

  const myCarsButtonStyle = useAnimatedStyle( () => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value }
      ]
    }
  } )

  const onGestureEvent = useAnimatedGestureHandler( {
    onStart (_, ctx: any) {
      ctx.posX = positionX.value
      ctx.posY = positionY.value
    },
    onActive (event, ctx: any) {
      positionX.value = event.translationX + ctx.posX
      positionY.value = event.translationY + ctx.posY
    },
    onEnd () {
      positionX.value = withSpring(0)
      positionY.value = withSpring(0)
    },
  } )

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

  useEffect( () => {
    BackHandler.addEventListener('hardwareBackPress', () => {return true})
  }, [] )

  function handleCardDetails (car : CarDTO) {
    navigation.navigate('CardDetails', { car })
  }
  
  function handleMyCars (car : CarDTO) {
    navigation.navigate('MyCars')
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
            {
              !isLoading &&
              <TotalCars>
                Total de {cars.length} carros
              </TotalCars>
            }
          </HeaderContent>
        </Header>
        {
          isLoading? <LoadingAnimation />
          :
          <CarList
            data={cars}
            keyExtractor={ item => item.id}
            renderItem={ ({ item }) =>
              <Car data={item} onPress={() => handleCardDetails(item)}/>}
          />
        }

        <PanGestureHandler onGestureEvent={onGestureEvent}>
          <MyCarsButtonWrapper
            style={ [ myCarsButtonStyle ] }
          >
            <MyCarsButton onPress={handleMyCars} >
              <Ionicons 
                name={'ios-car-sport'}
                size={32}
                color={theme.colors.shape}
              />
            </MyCarsButton>
          </MyCarsButtonWrapper>
        </PanGestureHandler>
    </Container>
  )
}