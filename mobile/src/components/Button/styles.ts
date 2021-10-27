import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';

export const styles = StyleSheet.create({
  button: {
    height: 48,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
      fontFamily: FONTS.BOLD,
      fontSize: 16,
      textTransform: 'uppercase'
  },
  icon: {
    marginRight: 12
  }
});