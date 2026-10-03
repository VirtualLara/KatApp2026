import React, { useState, } from 'react';
import { RegisterAuthUseCase } from '../../../domain/useCase/auth/RegisterAuth';


const RegisterViewModel = () => {

    const [ errorMessage, setErrorMessage ] = useState('');

    const [ values, setValues ]  = useState ({
        name: '',
        lastname: '',
        phone: '',
        //ocupation:'',
        //postalCode:'',
        //interests:'',
        //notifications:'',
        email: '',
        password: '',
        confirmPassword: '',
    });

    
    const onChange = ( property: string, value: any  ) => { 
      setValues({ ...values, [property]: value })
    }; 
    
    const register = async () => {
      if(isValidForm()) {
        const response = await RegisterAuthUseCase(values);
        console.log('Result '+ JSON.stringify(response));
      }
    };

    const isValidForm = (): boolean => {
      if (values.name === '') {
        setErrorMessage('Ingresa tu nombre.');
        return false;
      }
      if (values.lastname === '') {
        setErrorMessage('Ingresa tu apellido.');
        return false;
      }
      if (values.email === '') {
        setErrorMessage('Ingresa tu correo electrónico.');
        return false;
      }
      if (values.phone === '') {
        setErrorMessage('Ingresa tu número telefónico.');
        return false;
      }
      if (values.password === '') {
        setErrorMessage('Ingresa tu contraseña.');
        return false;
      }
      if (values.confirmPassword === '') {
        setErrorMessage('Ingresa la confirmación de la contraseña.');
        return false;
      }
      if (values.password !== values.confirmPassword) {
        setErrorMessage('Las contraseñas no coinciden.');
        return false;
      }

      return true;

    }


  return {
    ...values,
    onChange,
    register,
    errorMessage
  }
}

export default RegisterViewModel;