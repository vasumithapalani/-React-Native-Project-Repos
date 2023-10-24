import React from 'react'
import { View, Text, StyleSheet,TextInput,Button,ImageBackground } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



import DashboardTab from 'E:/Vasumitha_Git Uploads/-React-Native-Project-Repos/reactnative/AwesomeProject/src/screens/DashboardTab.js'
import ProfileTab from 'E:/Vasumitha_Git Uploads/-React-Native-Project-Repos/reactnative/AwesomeProject/src/screens/ProfileTab.js'
import SettingsTab from 'E:/Vasumitha_Git Uploads/-React-Native-Project-Repos/reactnative/AwesomeProject/src/screens/SettingsTab.js'

//const Tab = createBottomTabNavigator();

const Tab =createMaterialBottomTabNavigator();

const BottomTabNav=()=> {

  return (
    <Tab.Navigator 
    initialRouteName="Dashboard"
    barStyle={{ backgroundColor: 'lightskyblue' }}
    >
      <Tab.Screen name="Dashboard" component={DashboardTab}  
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: () =>( <MaterialCommunityIcons name="view-dashboard" color="black" size={30} />),
        }}           
        />

      <Tab.Screen name="Profile" component={ProfileTab} 
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: () => (<MaterialCommunityIcons  name="account" color="black" size={30} />),    
      }}/>

      <Tab.Screen name="Settings" component={SettingsTab} 
      options={{
        tabBarLabel: 'Settings',
        tabBarIcon: () => (<MaterialCommunityIcons  name="cog" color="black" size={30} />),    
      }}/>

    </Tab.Navigator>
  );
}


export default BottomTabNav;