import React from 'react'
import { View, TextInput, Image, StyleSheet, KeyboardType } from 'react-native'

import { MyColors } from '../theme/AppTheme';

interface props {
    image: any,
    placeholder: string,
    value: string,
    keyboardType: KeyboardType,
    secureTextEntry?: boolean,
    property: string,
    onChangeText: (property: string, value: any) => void,
}

export const CustomTextInput = ({
    image,
    placeholder,
    value,
    keyboardType,
    secureTextEntry = false,
    property,
    onChangeText,
}: props) => {
  return (
    <View style={styles.formInput} >
        <Image style={styles.formIcon} source={ image } />
        <TextInput style={styles.textInput} placeholder={ placeholder } keyboardType={ keyboardType } value={ value } onChangeText={ text => onChangeText( property, text ) } secureTextEntry={ secureTextEntry } />
    </View>
    )
}

const styles = StyleSheet.create({
  formInput:{
    flexDirection: 'row',
    marginTop: 15,
  },
  textInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: MyColors.borderBottomColorInput,
    marginLeft: 15,
  },
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 10,
    tintColor: '#00D5FF'
  },
});

