import { StyleSheet } from 'react-native'
import { FONTS, COLORS } from '../../theme'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: getStatusBarHeight() + 17,
        backgroundColor: COLORS.BLACK_SECONDARY,

    }
})