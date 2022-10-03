import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

import { Home } from '../../src/screens/Home'
import { CardDetails } from '../../src/screens/CardDetails'
import { Scheduling } from '../../src/screens/Scheduling'
import { SchedulingDetails } from '../../src/screens/SchedulingDetails'
import { SchedulingComplete } from '../../src/screens/SchedulingComplete/index'

export function StackRoutes () {
  return (
    <Navigator headerMode={'none'}>
      <Screen 
        name={'Home'}
        component={Home}
      />
      <Screen 
        name={'CardDetails'}
        component={CardDetails}
      />
      <Screen 
        name={'Scheduling'}
        component={Scheduling}
      />
      <Screen 
        name={'SchedulingDetails'}
        component={SchedulingDetails}
      />
      <Screen 
        name={'SchedulingComplete'}
        component={SchedulingComplete}
      />
    </Navigator>
  )
}