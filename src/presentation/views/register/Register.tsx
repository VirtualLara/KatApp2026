import React from 'react'
import { View, Text, Image, StyleSheet, } from 'react-native';

import { RoundedButton } from '../../componentes/RoundedButton';
import { MyColors, variables } from '../../theme/AppTheme';
import useViewModel from './ViewModel';
import { CustomTextInput } from '../../componentes/CustomTextInput';

export const RegisterScreen = () => {

  const { name, lastname, email, phone, password, confirmPassword, onChange, register } = useViewModel();

  return (
    <View style={styles.container}>

      {/* <Image style={styles.imageBackground} source={ require('../../../../assets/chef.jpg') } /> */}
      <Image style={styles.imageBackground} source={ variables.imgSec } resizeMode='cover'/>
      
      <View style={styles.logoContainer} >
        <Image style={styles.logoImage} source={ variables.userPhoto } tintColor={ '#fff' } />
        <Text style={styles.logoText} > SELECCIONA UNA IMAGEN </Text>
      </View>

      <View style={styles.form}>

        <Text style={styles.formText} > REGISTRARSE </Text>

        <CustomTextInput placeholder='Nombres' value={name} property='name' keyboardType='default' image={variables.userIcon1} secureTextEntry={false} onChangeText={onChange}  />

        <CustomTextInput placeholder='Apellidos' value={lastname} property='lastname' keyboardType='default' image={variables.userIcon2} secureTextEntry={false} onChangeText={onChange}  />

        <CustomTextInput placeholder='Correo electrónico' value={email} property='email' keyboardType='email-address' image={variables.emailIcon} secureTextEntry={false} onChangeText={onChange}  />

        <CustomTextInput placeholder='Teléfono' value={phone} property='phone' keyboardType='number-pad' image={variables.phoneIcon} secureTextEntry={false} onChangeText={onChange}  />

        <CustomTextInput placeholder='Contraseña' value={password} property='password' keyboardType='number-pad' image={variables.lockIcon1} secureTextEntry={true} onChangeText={onChange}  />

        <CustomTextInput placeholder='Confirmar contraseña' value={confirmPassword} property='confirmPassword' keyboardType='number-pad' image={variables.lockIcon2} secureTextEntry={true} onChangeText={onChange}  />

        <View style={{ marginTop:20 }} >
          <RoundedButton text='REGISTRARSE' onPress={ () => register() } />
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
    bottom: '70%',
  },
  logoContainer:{
    width: '100%',
    position:'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: '3%',
  },
  logoImage: {
    width: 100,
    height: 100,
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
    height: '75%',
    backgroundColor: MyColors.backgroundForm,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  formText: {
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
    color: MyColors.text,    
  },
});