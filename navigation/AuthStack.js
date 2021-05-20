import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import MyProfile from '../screens/MyProfile';
import HomeScreen from '../screens/HomeScreen';
import CreatePost from '../screens/CreatePost';

// const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const AuthStack = () => {
  return (
      <Stack.Navigator headerMode="none" initialRouteName="Welcome" >
        <Stack.Screen  name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={MyProfile} options={{ title: 'My Profile' }} />
        <Stack.Screen name="Create" component={CreatePost} />
      </Stack.Navigator>
  );
}
export default AuthStack;