import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignInScreen, SignUpScreen } from '../screens'

export default AuthStackScreens = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
}
