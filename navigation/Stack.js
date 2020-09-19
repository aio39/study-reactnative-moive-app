import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from '../screens/Detail';
import Tabs from './Tabs';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    mode="card"
    screenOptions={{
      headerStyle: {
        backgroundColor: 'black',
        borderBottomColor: 'black',
        shadowColor: 'black', // for ios
      },
      headerTintColor: 'white',
      headerBackTitleVisible: false,
      gestureEnabled: true, // for android
      headerTitleAlign: 'center',
    }}
  >
    <Stack.Screen name="Tabs" component={Tabs} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);
