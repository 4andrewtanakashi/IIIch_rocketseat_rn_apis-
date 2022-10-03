import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'

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
import {
  Calendar,
  DayProps,
  generateInterval,
  MarkedDateProps
} from '../../components/Calendar'

import ArrowSvg from '../../assets/arrow.svg'
import { Button } from '../../components/Button'

export function Scheduling () {
  const [lastSelectedDate, setLastSelected] = useState<DayProps>({} as DayProps)
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps)

  const theme = useTheme()
  const navigation = useNavigation()

  function handleSchedulingDetails () {
    navigation.navigate('SchedulingDetails')
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
              <DateValue selected={true}>
                18/06/2021
              </DateValue>
            </DateInfo>

            <ArrowSvg />

            <DateInfo>
              <DateTitle>ATÉ</DateTitle>
              <DateValue selected={true}>
                11/07/2021
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

        <Footer>
          <Button
              title={'Confirmar'}
              onPress={handleSchedulingDetails}
            />
        </Footer>
      </Container>
    </>
  )
}