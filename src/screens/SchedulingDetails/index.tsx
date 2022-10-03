import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

import {
  Container, Header, CarImageWarapper, Content, Details, Description,
  Brand, Name, Rent, Period, Price, Accessories, Footer, RentalPeriod,
  CalendarIcon, DateInfo, DateValue, DateTitle, RentalPrice, RentalPriceLabel,
  RentalPriceQuota, RentalPriceTotal, RenalPriceDetails
} from './styles'
import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'
import { Accessory } from '../../components/Accessory'
import { Button } from '../../components/Button'
import { useTheme } from 'styled-components'

import SpeedSvg from '../../assets/speed.svg'
import AccelerationSvg from '../../assets/acceleration.svg'
import ForceSvg from '../../assets/force.svg'
import GasolineSvg from '../../assets/gasoline.svg'
import ExchangeSvg from '../../assets/exchange.svg'
import PeopleSvg from '../../assets/people.svg'

export function SchedulingDetails () {
  const theme = useTheme()
  const navigation = useNavigation()
  const route = useRoute()

  function handleSchedulingComplete () {
    navigation.navigate('SchedulingComplete')
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

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name={'calendar'}
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>

          <Feather
              name={'chevron-right'}
              size={RFValue(10)}
              color={theme.colors.shape}
          />
          
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RenalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RenalPriceDetails>
        </RentalPrice>

      </Content>
      <Footer>
          <Button
            title={'Alugar agora'}
            color={theme.colors.success}
            onPress={handleSchedulingComplete}
          />
      </Footer>
    </Container>
  )
}