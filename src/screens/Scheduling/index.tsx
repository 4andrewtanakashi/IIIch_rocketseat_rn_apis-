import React from 'react'
import { useTheme } from 'styled-components'

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

import ArrowSvg from '../../assets/arrow.svg'
import { StatusBar } from 'react-native'
import { Button } from '../../components/Button'

export function Scheduling () {
  const theme = useTheme()

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
            onPress={() => {}}
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

        </Content>

        <Footer>
          <Button
              title={'Confirmar'}
            />
        </Footer>
      </Container>
    </>
  )
}