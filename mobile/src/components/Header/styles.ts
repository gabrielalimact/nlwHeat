import { StyleSheet } from 'react-native';
import { FONTS, COLORS } from '../../theme'
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  logoutText: {
    fontSize: 15,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE
  }
});