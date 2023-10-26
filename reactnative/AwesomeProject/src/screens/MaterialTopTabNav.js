import React from 'react'
import { View, Text, StyleSheet,TextInput,Button,ImageBackground } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import DashboardTab from '../screens/DashboardTab'
import ProfileTab from '../screens/ProfileTab'
import SettingsTab from '../screens/SettingsTab'


const Tab =createMaterialTopTabNavigator();

const MaterialTopTabNav=()=> {

  return (

    <Tab.Navigator 
     initialRouteName="Dashboard">

      <Tab.Screen name="Dashboard" component={DashboardTab}/>
      <Tab.Screen name="Settings" component={SettingsTab}/>
      <Tab.Screen name="Profile" component={ProfileTab}/>

    </Tab.Navigator>
   
  );
}


export default MaterialTopTabNav;