import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { format, parseISO } from 'date-fns'
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
import { getAccessoryIcon } from '../../utils/getAccessoryIcon'
import { Params } from '../../utils/interfaces'
import { getPlataformDate } from '../../utils/getPlatafromDate'
import { api } from '../../services/api'

interface ParamsSchedulesDetails extends Params {
  dates: string[]
}

interface RentalPeriod {
  start: string
  end: string
}

export function SchedulingDetails () {
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

  const theme = useTheme()
  const navigation = useNavigation()
  const route = useRoute()
  const { car, dates } = route.params as ParamsSchedulesDetails

  const rentTotal = Number(dates.length * car.rent.price)

  async function handleSchedulingComplete () {
    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`)

    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates
    ]

    api.put(`/schedules_bycars/${car.id}`, {
      id: car.id,
      unavailable_dates
    } )
    .then( () =>  navigation.navigate('SchedulingComplete'))
    .catch( () => Alert.alert('Não foi possível confirmar o agendamento.'))

    
  }

  function handleBack () {
    navigation.goBack()
  }

  useEffect( () => {
    setRentalPeriod( {
      start: format(getPlataformDate(new Date(parseISO(dates[0]))), 'dd/MM/yyyy' ),
      end: format(getPlataformDate( new Date(parseISO(dates[dates.length - 1]))), 'dd/MM/yyyy' )
    } )
  }, [])

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
                icon={getAccessoryIcon(accesory.type)} 
              />
            ) )
          }
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
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>

          <Feather
              name={'chevron-right'}
              size={RFValue(10)}
              color={theme.colors.shape}
          />
          
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RenalPriceDetails>
            <RentalPriceQuota>R$ {car.rent.price} x{dates.length} diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
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