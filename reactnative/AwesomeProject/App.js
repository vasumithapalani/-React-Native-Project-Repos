import React from 'react'
import { View, Text, StyleSheet,TextInput,Button,ImageBackground,ActivityIndicator,TouchableOpacity} from 'react-native'
import { createContext } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createSwitchNavigator } from '@react-navigation/compat';


import LoginScreen from './src/screens/LoginScreen'
import Home from './src/screens/Home'
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import Counter from './src/screens/Counter'
import DataFetching from './src/screens/DataFetching'
import BottomTabNav from './src/screens/BottomTabNav'
import MaterialTopTabNav from './src/screens/MaterialTopTabNav'
import Pressablee from './src/screens/Pressablee'
import FirstPage from './src/screens/FirstPage'
import ComponentE from './src/screens/ComponentE';
import ComponentD from './src/screens/ComponentD';
import ComponentC from './src/screens/ComponentC';
import LoginStack from './src/screens/LoginStack'
import DashboardStack from './src/screens/DashboardStack'


import {HOME_PAGE} from './src/constant/Navigation';
import {REGISTRATION_PAGE} from './src/constant/Navigation';
import {LOGIN_PAGE} from './src/constant/Navigation';
import {BOTTOM_TABS} from './src/constant/Navigation';


import { CounterProvider, useCounter } from './src/screens/CounterContext';
import { CounterDisplay, CounterControls } from './src/screens/CounterDisplayControls';

import { Provider } from 'react-redux';
import {store} from './src/screens/reduxstore'
import RootNavigator from './src/screens/RootNavigator'

const Stack = createNativeStackNavigator();



const App = () => {

   

  return (
  
    <Provider store={store}>

    <NavigationContainer>
  
       <RootNavigator/>

    </NavigationContainer>
  
    </Provider>
    
  );
  }

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
 },

 button:{
  width: 200,
  height: 40,
  borderWidth:1.5,
  backgroundColor: 'skyblue',
  borderRadius:100,  
  justifyContent: 'center',
  padding:5,
  marginTop:28,
  
},

buttontext:{
  fontWeight:'bold',
  textAlign:'center',  
  color:'white',
  fontSize:22,
  borderStyle:'solid',
  borderColor:'black',
},

});

export default App




