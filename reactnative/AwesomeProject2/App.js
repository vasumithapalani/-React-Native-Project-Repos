import React from 'react'
import { View, Text, StyleSheet,TextInput,Button,ImageBackground } from 'react-native'
import { NavigationContainer} from '@react-navigation/native';
// import { useNavigation  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {REGISTRATION_PAGE} from './src/constant/Navigation';
import {LOGIN_PAGE} from './src/constant/Navigation';

// import LoginScreen from './src/screens/LoginScreen'
import Login from './src/screens/Login'
import Register from './src/screens/Register'


const Stack = createNativeStackNavigator();


const App = () => {
  return (
      <NavigationContainer>
       <Stack.Navigator initialRouteName={REGISTRATION_PAGE}>
       <Stack.Screen name={LOGIN_PAGE} component={Login} />
       <Stack.Screen name={REGISTRATION_PAGE} component={Register} />
       </Stack.Navigator>
       </NavigationContainer> 
      );
  }


const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
 },

});

export default App


