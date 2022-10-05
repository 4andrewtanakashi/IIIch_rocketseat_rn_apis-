import { FlatList } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'

const ButtonAnimated = Animated.createAnimatedComponent(RectButton)

export const Container = styled.View`
  flex: 1;
  background-color: ${ ( { theme } ) => theme.colors.background_primary};
`
export const HeaderContent = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`

export const Header = styled.View`
  width: 100%;
  height: 113px;
  background-color: ${ ( { theme } ) => theme.colors.header};
  justify-content: flex-end;
  padding: 32px ${RFValue(24)}px;
`
export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${ ( { theme } ) => theme.colors.text};
  font-family: ${ ( { theme } ) => theme.fonts.primary_400};
`
export const CarList = styled(
    FlatList as new () => FlatList<CarDTO>
  ).attrs( {
  contentContainerStyle: {
    padding: 24
  },
  showsVerticalScrollIndicator: false
} )``

export const MyCarsButton = styled(ButtonAnimated)`
  width: 60px;
  height: 60px;
  background-color: ${ ({theme}) => theme.colors.main };
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 13px;
  right: 22px;
`
export const MyCarsButtonWrapper = styled(Animated.View)``
