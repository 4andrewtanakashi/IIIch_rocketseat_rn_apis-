import React from 'react'
import { StatusBar } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle
} from 'react-native-reanimated'

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
  Footer,
  HeaderWrapper
} from './styles'
import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider/'
import { Accessory } from '../../components/Accessory'
import { Button } from '../../components/Button'
import { getAccessoryIcon } from '../../utils/getAccessoryIcon'
import { Params } from '../../utils/interfaces'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export function CardDetails () {
  const navigation = useNavigation()
  const route = useRoute()
  const scrollY = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler( event => {
    scrollY.value = event.contentOffset.y
  } )

  const headerStyleAnimation = useAnimatedStyle( () => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 70],
        Extrapolate.CLAMP
      )
    }
  } )

  const sliderCarsStyleAnimation = useAnimatedStyle( () => {
    return {
      opacity: interpolate(
        scrollY.value,
        [0, 150],
        [1, 0],
        Extrapolate.CLAMP
      )
    }
  } )

  const { car } = route.params as Params

  function handleConfirmRental () {
    navigation.navigate('Scheduling', { car })
  }

  function handleBack () {
    navigation.goBack()
  }

  return (
    <Container>
      <StatusBar 
        barStyle={'dark-content'}
        translucent
        backgroundColor={'transparent'}
      /> 
      <HeaderWrapper
        style={[headerStyleAnimation]}
      >
        <Header>
          <BackButton onPress={handleBack}/>
        </Header>

        <CarImageWarapper style={sliderCarsStyleAnimation} >
          <ImageSlider 
            imageUrl={car.photos}
          />
        </CarImageWarapper>
      </HeaderWrapper>

      <Content
        onScroll={scrollHandler}
      >
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
                icon={getAccessoryIcon(accesory.type)}
              />
            ) )
          }
        </Accessories>

        <About>{car.about}</About>
        <About>{car.about}</About>
        <About>{car.about}</About>
        <About>{car.about}</About>
        <About>{car.about}</About>

      </Content>
      <Footer>
          <Button title={'Escolher período do aluguel'} onPress={handleConfirmRental}/>
      </Footer>
    </Container>
  )
}