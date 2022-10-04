import React, { useEffect, useState } from 'react'
import { StatusBar, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'

import { useTheme } from 'styled-components'
import  { CarDTO } from '../../dtos/CarDTO'
import { api } from '../../services/api'
import { BackButton } from '../../components/BackButton'
import { Car } from '../../components/Car'
import {
  Container,
  Header,
  Title,
  SubTitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuality,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
} from './styles'

interface CarProps {
  id: string
  user_id: string
  car: CarDTO
}

export function MyCars () {
  const [cars, setCars] = useState<CarProps[]>([])
  const [loading, setLoading] = useState(true)

  const theme = useTheme()
  const navigation = useNavigation()

  useEffect( () => {
    async function fetchCars () {
      try {
        const response = await api.get('/schedules_byuser?user_id=1')
        console.log("response.data: ", response.data)
        setCars(response.data)
      } catch (error) {
        console.log(error as string)
      } finally {
        setLoading(false)
      }
    }
    fetchCars()
  }, [])

  function handleBack () {
    navigation.goBack()
  }

  return (
    <Container>
      <StatusBar 
        barStyle={'light-content'}
        translucent
        backgroundColor={'transparent'}
      />
      <Header>
        <BackButton
          onPress={handleBack}
          color={theme.colors.shape}  
        />

        <Title>
          Seus agendamentos, {'\n'}
          estão aqui.
        </Title>
        <SubTitle>Conforto, segurança e praticidade.</SubTitle>
      </Header>

      <Content>
        <Appointments>
          <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
          <AppointmentsQuality>05</AppointmentsQuality>
        </Appointments>

        <FlatList 
          data={cars}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={ ({item}) => (
            <CarWrapper>
              <Car data={item.car} />
              <CarFooter>
                <CarFooterTitle>Período</CarFooterTitle>
                <CarFooterPeriod>
                  <CarFooterDate>18/06/2021</CarFooterDate>
                  <AntDesign
                    name={'arrowright'}
                    size={20}
                    color={theme.colors.title}
                    style={ { marginHorizontal: 10} }
                  />
                  <CarFooterDate>20/06/2021</CarFooterDate>
                </CarFooterPeriod>
              </CarFooter>
            </CarWrapper>
          ) }
        />
      </Content>
    </Container>
  )
}