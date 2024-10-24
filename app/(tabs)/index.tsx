import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/HomeScreen';
import RegistrationScreen from '../screen/RegistrationScreen';
import PreTestScreen from '../screen/PreTestScreen';
import TestScreen from '../screen/TestScreen';
import PostTestScreen from '../screen/PostTestScreen';
import ResultScreen from '../screen/ResultScreen';
import ShareScreen from '../screen/ShareScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="PreTest" component={PreTestScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
        <Stack.Screen name="PostTest" component={PostTestScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen name="Share" component={ShareScreen} />
      </Stack.Navigator>
  );
}