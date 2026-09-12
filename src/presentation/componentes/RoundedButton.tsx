
import React from 'react'
import { TouchableOpacity, StyleSheet, Text, ToastAndroid } from 'react-native';
import { MyColors } from '../theme/AppTheme';


interface props {
    text: string,
    onPress: () => void,
}

export const RoundedButton = ({ text, onPress }: props ) => {
  return (
    <TouchableOpacity style={styles.touchable} onPress={ () => {} } >
        <Text style={styles.textTouchable} onPress={ () => onPress()} > {text} </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create ({
    touchable: {
        width: '100%',
        height: 50,
        backgroundColor: MyColors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    textTouchable: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        width: '100%',
        textAlign: 'center',
    }
})