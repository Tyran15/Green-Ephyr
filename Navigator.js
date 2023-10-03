import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import ConvMoedas from './screens/ConvMoedaParaDollar';
const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Green Ephyr">
        <Stack.Screen name="Green Ephyrz" component={HomeScreen} />
        <Stack.Screen name="Convensor" component={ConvMoedas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
