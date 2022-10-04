import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${ ({theme}) => theme.colors.background_primary};
`
export const Header = styled.View`
  width: 100%;
  height: 325px;
  background: ${ ({theme}) => theme.colors.header };
  justify-content: center;
  padding: 25px;
  padding-top: ${getStatusBarHeight() + 30}px;
`
export const Title = styled.Text`
  color: ${ ({theme}) => theme.colors.shape };
  font-family: ${ ({theme}) => theme.fonts.secondary_600 };
  font-size: ${RFValue(30)}px;
  padding-top: 24px;
`
export const SubTitle = styled.Text`
  color: ${ ({theme}) => theme.colors.shape };
  font-family: ${ ({theme}) => theme.fonts.secondary_600 };
  font-size: ${RFValue(15)}px;
  padding-top: 24px;
`
export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 16px;
`

export const Appointments = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 24px 0;
`

export const AppointmentsTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${ ( { theme } ) => theme.colors.text};
  font-family: ${ ( { theme } ) => theme.fonts.primary_400};
`

export const AppointmentsQuality = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${ ( { theme } ) => theme.colors.title};
  font-family: ${ ( { theme } ) => theme.fonts.primary_500};
`
