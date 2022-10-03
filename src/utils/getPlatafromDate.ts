import { addDays } from 'date-fns'
import { Platform } from 'react-native'

export function getPlataformDate (date: Date) {
  console.log('getPlataformDate: ', date)
  if (Platform.OS === 'ios') {
    return addDays(date, 1)
  } else {
    return date
  }
}