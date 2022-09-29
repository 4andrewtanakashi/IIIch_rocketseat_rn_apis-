import React from 'react'

import {
  Container,
  Header,
} from './styles'
import { BackButton } from '../../components/BackButton'

export function CardDetails () {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}}/>
      </Header>
    </Container>
  )
}