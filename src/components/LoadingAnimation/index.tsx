import React from 'react'
import AnimatedLottieView from 'lottie-react-native'

import { Container } from './styles'
import carAnimation from '../../assets/carAnimation.json'

export function LoadingAnimation () {
  return (
    <Container>
      <AnimatedLottieView 
        source={carAnimation}
        style={ { height: 200} }
        resizeMode={'contain'}
        autoPlay
        loop
      />
    </Container>
  )
}