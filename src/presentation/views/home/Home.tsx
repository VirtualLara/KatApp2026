import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, ToastAndroid, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { RoundedButton } from '../../componentes/RoundedButton';
import { MyColors, variables } from '../../theme/AppTheme';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';
import { CustomTextInput } from '../../componentes/CustomTextInput';

export const HomeScreen = () => {

  const { email, password, onChange, login } = useViewModel();

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>

      {/*  <Image style={styles.imageBackground} source={ require('../../../../assets/chef.jpg') } /> */}
      {/* <Image style={styles.imageBackground} source={ require('../../../../assets/myassets/fn.jpg') } resizeMode='contain' /> */}
      <Image style={styles.imageBackground} source={ variables.imgPrin } resizeMode='contain' />
      
      <View style={styles.logoContainer} >
        {/* <Image style={styles.logoImage} source={ require('../../../../assets/logo.png') } /> */}
        {/* <Image style={styles.logoImage} source={ require('../../../../assets/myassets/lk1.png') } /> */}
        <Image style={styles.logoImage} source={ variables.logoPrin } />
        <Text style={styles.logoText} > KATISA </Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formText} > INICIO DE SESION </Text>

        <CustomTextInput image={ variables.userIcon1 } placeholder='Correo Electrónico' keyboardType='email-address' property='email' onChangeText={ onChange } value={ email } secureTextEntry={false} />
        
        <CustomTextInput image={ variables.lockIcon1 } placeholder='Contraseña' keyboardType='number-pad' property='password' onChangeText={ onChange } value={ password } secureTextEntry={true} />


        <View style={{ marginTop:30 }} >
          <RoundedButton text='ENTRAR' onPress={ () => login() } />
        </View>

        <View style={styles.formRegister} >
          <Text style={styles.textNo} > ¿No tienes cuenta? </Text>
          <TouchableOpacity onPress={ () => navigation.navigate('RegisterScreen') } >
              <Text style={styles.formRegisterText} > Regístrate </Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyColors.backgroundApp,
  },
  imageBackground: {
    width: '100%' ,
    height: '100%',
    opacity: 0.7,    
    bottom: '37%',
  },
  logoContainer:{
    width: '100%',
    position:'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    //alignSelf: 'center',
    top: '15%',
  },
  logoImage: {
    width: 100,
    height: 100,
    borderRadius: 100
  },
  logoText: {
    color: MyColors.colorTitleApp,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  form: {
    width:'100%',
    height: '45%',
    backgroundColor: MyColors.backgroundForm,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
    justifyContent: 'space-between',
    paddingBottom: 70
  },
  formText: {
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
    color: MyColors.text,    
  },
  formRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  textNo: {
    fontWeight: '600',
    fontSize: 15,
    color: MyColors.text
  },
  formRegisterText: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 18,
    color: MyColors.primary,
    borderBottomWidth: 1,
    borderBottomColor: MyColors.primary,
    marginLeft: 10,
  },  
});

