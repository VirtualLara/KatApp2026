import React, { useState, } from 'react';
import { ApiDelivery } from '../../../data/sources/remote/api/ApiDelivery';
import { RegisterAuthUseCase } from '../../../domain/useCase/auth/RegisterAuth';


const RegisterViewModel = () => {

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
      const response = await RegisterAuthUseCase(values);
      console.log('Result '+ JSON.stringify(response));
    };

  return {
    ...values,
    onChange,
    register,
  }
}

export default RegisterViewModel;