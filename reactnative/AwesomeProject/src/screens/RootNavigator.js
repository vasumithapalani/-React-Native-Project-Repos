import React from 'react';
import { connect } from 'react-redux';
import LoginStack from '../screens/LoginStack';
import DashboardStack from '../screens/DashboardStack';
import isLoggedIn from '../screens/Login';


const RootNavigator = (isLoggedIn) => {
  return isLoggedIn ? <DashboardStack /> : <LoginStack />;
};

export default RootNavigator;