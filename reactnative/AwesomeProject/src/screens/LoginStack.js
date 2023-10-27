

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LOGIN_PAGE} from '../constant/Navigation'
import Login from '../screens/Login'


const Stack=createNativeStackNavigator()

const LoginStack=()=>{

    return (

        <Stack.Navigator>

        <Stack.Screen name={LOGIN_PAGE} component={Login}/>

        </Stack.Navigator>

    );

}

export default LoginStack;

