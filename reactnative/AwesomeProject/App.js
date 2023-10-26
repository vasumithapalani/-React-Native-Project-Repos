import React from 'react'
import { View, Text, StyleSheet,TextInput,Button,ImageBackground,ActivityIndicator,TouchableOpacity} from 'react-native'
import { createContext } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


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


import {HOME_PAGE} from './src/constant/Navigation';
import {REGISTRATION_PAGE} from './src/constant/Navigation';
import {LOGIN_PAGE} from './src/constant/Navigation';
import {BOTTOM_TABS} from './src/constant/Navigation';


import { CounterProvider, useCounter } from './src/screens/CounterContext';
import { CounterDisplay, CounterControls } from './src/screens/CounterDisplayControls';

const Stack = createNativeStackNavigator();
export const UserContext=createContext()


const FirstComponent=()=>{

  return (

    <SecondComponent/>

  )

}


const SecondComponent=()=>{

  const count=useSelector(state=>state.reducer.count)

  return (

    <Text style={{fontSize:30}}>Count: {count}</Text>
  )
  
}

const App = () => {

   const dispatch=useDispatch();
  
   const incrementtheValue=()=>{
      
    dispatch({
      
      type:'increment',

    })

   }

  return (
    <View>

    <FirstComponent/>

    <TouchableOpacity style={styles.button} onPress={incrementtheValue}><Text style={styles.buttontext}>Increment</Text></TouchableOpacity>

 </View>

    
  )
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


/*
Consumer:

export const UserContext=createContext()

 
    <UserContext.Provider value={'Vasumitha'}>
      <ComponentC/>
    </UserContext.Provider>



Stack Navigation:

    <NavigationContainer>
    <Stack.Navigator initialRouteName={HOME_PAGE}
    screenOptions={{
     headerStyle: {
       backgroundColor: 'grey',
     },
     
     headerTintColor: '#fff',

     headerTitleStyle: {
       fontWeight: 'bold',
     },
   }} >
   <Stack.Screen name={HOME_PAGE} component={Home}/>
    <Stack.Screen name={LOGIN_PAGE} component={Login}/>
    <Stack.Screen name={REGISTRATION_PAGE} component={Register} initialParams={{id:66}}/>
    <Stack.Screen name={BOTTOM_TABS} component={MaterialTopTabNav}/>
    </Stack.Navigator>
    </NavigationContainer>



Stack Navigation
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
       <Stack.Screen name={MY_TABS} component={MyTabs}/>
       </Stack.Navigator>*/


/*
Provider:

<CounterProvider>

    <View style={styles.container}>

      <CounterDisplay />

      <CounterControls />
    
    </View>

  </CounterProvider>


Bottom Tab Navigation :

      <NavigationContainer>
       <Stack.Navigator initialRouteName={HOME_PAGE}
       screenOptions={{
        headerStyle: {
          backgroundColor: 'grey',
        },
        
        headerTintColor: '#fff',

        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} >
      <Stack.Screen name={HOME_PAGE} component={Home}/>
       <Stack.Screen name={LOGIN_PAGE} component={Login}/>
       <Stack.Screen name={REGISTRATION_PAGE} component={Register} initialParams={{id:66}}/>
       <Stack.Screen name={BOTTOM_TABS} component={BottomTabNav}/>
       </Stack.Navigator>
       </NavigationContainer>
       

*/ 
