import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

import { Home } from '../../src/screens/Home'
import { CardDetails } from '../../src/screens/CardDetails'
import { Scheduling } from '../../src/screens/Scheduling'
import { SchedulingDetails } from '../../src/screens/SchedulingDetails'
import { SchedulingComplete } from '../../src/screens/SchedulingComplete/'
import { MyCars } from '../screens/MyCars'
import { Splash } from '../screens/Splash'

export function StackRoutes () {
  return (
    <Navigator headerMode={'none'} initialRouteName={'Splash'}>
      <Screen 
        name={'Splash'}
        component={Splash}
      />
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
      <Screen 
        name={'MyCars'}
        component={MyCars}
      />
    </Navigator>
  )
}