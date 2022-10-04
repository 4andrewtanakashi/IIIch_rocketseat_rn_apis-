import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import { format, parseISO } from 'date-fns'
import { useTheme } from 'styled-components'
import { useNavigation, useRoute } from '@react-navigation/native'

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer
} from './styles'
import { BackButton } from '../../components/BackButton'
import { Params } from '../../utils/interfaces'
import {
  Calendar,
  DayProps,
  generateInterval,
  MarkedDateProps
} from '../../components/Calendar'

import ArrowSvg from '../../assets/arrow.svg'
import { Button } from '../../components/Button'
import { getPlataformDate } from '../../utils/getPlatafromDate'

interface RentalPeriod {
  startFormatted: string
  endFormatted: string
}

export function Scheduling () {
  const [lastSelectedDate, setLastSelected] = useState<DayProps>({} as DayProps)
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps)
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

  const theme = useTheme()
  const navigation = useNavigation()
  const route = useRoute()

  const { car } = route.params as Params

  function handleSchedulingDetails () {
    navigation.navigate('SchedulingDetails', {
      car,
      dates: Object.keys(markedDates)
    } )
  }

  function handleBack () {
    navigation.goBack()
  }

  function handleChangeDate (date: DayProps) {

    let start : DayProps = (!lastSelectedDate.timestamp)? date : lastSelectedDate
    let end : DayProps = date
    if (start.timestamp > end.timestamp) {
      start = end
      end = start
    }

    setLastSelected(end)
    const interval = generateInterval(start, end)
    setMarkedDates(interval)

    const firstDate = parseISO(Object.keys(interval)[0])
    const endDate = parseISO(Object.keys(interval)[Object.keys(interval).length - 1])

    setRentalPeriod( {
      startFormatted: format(getPlataformDate(new Date(firstDate)), 'dd/MM/yyyy'),
      endFormatted: format(getPlataformDate(new Date(endDate)), 'dd/MM/yyyy')
    } )
  }

  return (
    <>
      <StatusBar 
        barStyle={'light-content'}
        translucent
        backgroundColor={'transparent'}
      /> 
      <Container>
        <Header>
          
          <BackButton
            onPress={handleBack}
            color={theme.colors.shape}  
          />


          <Title>
            Escolha uma {'\n'}
            data de início e {'\n'}
            fim do aluguel
          </Title>

          <RentalPeriod>
            <DateInfo>
              <DateTitle>DE</DateTitle>
              <DateValue selected={!!rentalPeriod.startFormatted}>
                {rentalPeriod.startFormatted}
              </DateValue>
            </DateInfo>

            <ArrowSvg />

            <DateInfo>
              <DateTitle>ATÉ</DateTitle>
              <DateValue selected={!!rentalPeriod.endFormatted}>
                {rentalPeriod.endFormatted}
              </DateValue>
            </DateInfo>
          </RentalPeriod>
        </Header>

        <Content>
          <Calendar 
            markedDates={markedDates}
            onDayPress={handleChangeDate}
          />
        </Content>
        {console.log('!!rentalPeriod.startFormatted: ', !!rentalPeriod.startFormatted, 
          "rentalPeriod.startFormatted: ", rentalPeriod.startFormatted
        )}
        <Footer>
          <Button
              title={'Confirmar'}
              onPress={handleSchedulingDetails}
              enabled={!!rentalPeriod.startFormatted}
            />
        </Footer>
      </Container>
    </>
  )
}