import React, { useEffect, useState } from 'react'
import { StatusBar, FlatList } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

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
  AppointmentsQuality
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
  const route = useRoute()

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
            <Car data={item.car} />
          ) }
        />
      </Content>
    </Container>
  )
}