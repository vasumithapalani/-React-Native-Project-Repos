import React from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

import LoginStack from '../screens/LoginStack';
import DashboardStack from '../screens/DashboardStack';
import isLoggedIn from '../screens/Login';
import { createSwitchNavigator } from '@react-navigation/compat';
import authReducer from '../screens/authReducer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




const RootNavigator = () => {
    // Access the 'isLoggedIn' state from the Redux store
    const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  
    // Use the 'isLoggedIn' state to determine which stack navigator to display
    return isLoggedIn ? <DashboardStack /> : <LoginStack />;
  };
  
/*const RootNavigator = (isLoggedIn) => {
  return isLoggedIn ? <DashboardStack />: <LoginStack />  ;
}*/

export default RootNavigator;