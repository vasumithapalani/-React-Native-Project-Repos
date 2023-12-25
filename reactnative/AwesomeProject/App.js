import React ,  { Fragment,useState, useEffect }from 'react'
import { View, Text, StyleSheet, TextInput, Button, ImageBackground,PermissionsAndroid, Platform,ActivityIndicator, TouchableOpacity } from 'react-native'
import { createContext } from 'react';
import * as RNFS from 'react-native-fs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createSwitchNavigator } from '@react-navigation/compat';


import LoginScreen from './src/screens/LoginScreen'
import Home from './src/screens/Home'
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import Draw from './src/screens/Draw'
import GetRequest from './src/screens/GetRequest'
import PostRequest from './src/screens/PostRequest'
import UpdateRequest from './src/screens/UpdateRequest'
import DeleteRequest from './src/screens/DeleteRequest'
import FileSystem from './src/screens/FileSystem'
import ZipUnZip from './src/screens/ZipUnZip'

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


import { HOME_PAGE } from './src/constant/Navigation';
import { REGISTRATION_PAGE } from './src/constant/Navigation';
import { LOGIN_PAGE } from './src/constant/Navigation';
import { BOTTOM_TABS } from './src/constant/Navigation';


import { CounterProvider, useCounter } from './src/screens/CounterContext';
import { CounterDisplay, CounterControls } from './src/screens/CounterDisplayControls';

import { Provider } from 'react-redux';
//import {store} from './src/screens/reduxstore'
import store,{persistor} from "./src/redux";
import { PersistGate } from 'redux-persist/integration/react';
import RootNavigator from './src/screens/RootNavigator'

const Stack = createNativeStackNavigator();



const AppPermission = () => { 

  const [storagePermission, setStoragePermission] = useState(false);

  const PermissionsFun = async () => {
    if ( Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ]);
        
        if (
          granted[PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          granted[PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE] ===
            PermissionsAndroid.RESULTS.GRANTED
        ) {
          //setStoragePermission(true);
          console.log("Granted...........")
        } else {
          //setStoragePermission(false);
          console.log("Denied...........")

        }
      } catch (err) {
        console.warn(err);
      }
    }
  };
  useEffect(() => {
   
    PermissionsFun();
  }, []);


  return <Fragment />;
};

const App = () => {



  return (

    <Provider store={store}>


    <PersistGate loading={null} persistor={persistor}>

    <AppPermission />

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

          <Stack.Screen name={HOME_PAGE} component={Home} options={{ headerShown: false }} />
          <Stack.Screen name={LOGIN_PAGE} component={Login} options={{ headerShown: false }} />
          <Stack.Screen name={REGISTRATION_PAGE} component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="Draw" component={Draw} options={{ headerShown: false }} />
          <Stack.Screen name="GetRequest" component={GetRequest} />
          <Stack.Screen name="PostRequest" component={PostRequest} />
          <Stack.Screen name="UpdateRequest" component={UpdateRequest} />
          <Stack.Screen name="DeleteRequest" component={DeleteRequest} />
          <Stack.Screen name="FileSystem" component={FileSystem} />
          <Stack.Screen name="ZipUnZip" component={ZipUnZip} />


        </Stack.Navigator>

      </NavigationContainer>

      </PersistGate>

    </Provider>

  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    width: 200,
    height: 40,
    borderWidth: 1.5,
    backgroundColor: 'skyblue',
    borderRadius: 100,
    justifyContent: 'center',
    padding: 5,
    marginTop: 28,

  },

  buttontext: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
    borderStyle: 'solid',
    borderColor: 'black',
  },

});

export default App




