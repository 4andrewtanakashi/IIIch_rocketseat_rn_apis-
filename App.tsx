import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'react-native'
import AppLoading from 'expo-app-loading'

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo'

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter'

import { Home } from './src/screens/Home'
import theme from './src/styles/theme'

export default function App() {
  const [fontsLoaded] = useFonts( {
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Inter_400Regular,
    Inter_500Medium
  } )

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme} >
      <StatusBar barStyle="light-content" />
      <Home />
    </ThemeProvider>
  );
}
