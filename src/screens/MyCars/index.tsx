import React, { useEffect, useState } from 'react'
import  { CarDTO } from '../../dtos/CarDTO'
import { api } from '../../services/api'

import { Container } from './styles'

export function MyCars () {
  const [cars, setCars] = useState<CarDTO[]>([])
  const [loading, setLoading] = useState(true)

  useEffect( () => {
    async function fetchCars () {
      try {
        const response = await api.get('/schedules_bycars?user_id=4')
        setCars(response.data)
      } catch (error) {
        console.log(error as string)
      } finally {
        setLoading(false)
      }
    }
    fetchCars()
  }, [])

  return (
    <Container>

    </Container>
  )
}