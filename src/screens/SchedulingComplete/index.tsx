import React from 'react'
import { StatusBar, useWindowDimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  Content,
  Title,
  Message,
  Footer
} from './styles'

import LogoSvg from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg'
import { ConfirmButton } from '../../components/ConfirmButton'

export function SchedulingComplete () {
  const { width } = useWindowDimensions()
  const navigation = useNavigation()

  function handleHome () {
    navigation.navigate('Home')
  }

  return (
    <>
        <StatusBar
          barStyle='light-content'
          backgroundColor={'transparent'}
          translucent
        />
      <Container>
        <LogoSvg width={width} />

        <Content>
          <DoneSvg width={80} height={80} />
          <Title>Carro alugado!</Title>
          <Message>
            Agora você só precisa ir {'\n'}
            até a concessionária da RENTX {'\n'}
            pegar o seu automóvel.
          </Message>

          <Footer>
            <ConfirmButton 
              title={'OK'}
              onPress={handleHome}
            />
          </Footer>
        </Content>
      </Container>
    </>
  )
}