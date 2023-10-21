import React from 'react'
import { View, Text, StyleSheet,TextInput,Button,ImageBackground } from 'react-native'
import { NavigationContainer} from '@react-navigation/native';
// import { useNavigation  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {REGISTRATION_PAGE} from './src/constant/Navigation';
import {LOGIN_PAGE} from './src/constant/Navigation';

import LoginScreen from './src/screens/LoginScreen'
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import Counter from './src/screens/Counter'
import DataFetching from './src/screens/DataFetching'


const Stack = createNativeStackNavigator();


const App = () => {
  return (
   
      <NavigationContainer>
       <Stack.Navigator initialRouteName={REGISTRATION_PAGE}
       screenOptions={{
        headerStyle: {
          backgroundColor: 'grey',
        },
        
        headerTintColor: '#fff',

        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
       >
       <Stack.Screen name={LOGIN_PAGE} component={Login}  options={{title: ''}}/>
       <Stack.Screen name={REGISTRATION_PAGE} component={Register} initialParams={{id:66}} options={({route})=>({title:route.params.name})}/>
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


/*<NavigationContainer>
       <Stack.Navigator initialRouteName={REGISTRATION_PAGE}
       screenOptions={{
        headerStyle: {
          backgroundColor: 'grey',
        },
        
        headerTintColor: '#fff',

        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
       >
       <Stack.Screen name={LOGIN_PAGE} component={Login}  options={{title: ''}}/>
       <Stack.Screen name={REGISTRATION_PAGE} component={Register}/>
       </Stack.Navigator>
       </NavigationContainer> */