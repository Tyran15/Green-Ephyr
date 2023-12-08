import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabRoutes from "./Tab.Navigator";
import SelectConv from "../assets/screens/SelectConv";
import HomeScreen from "../assets/screens/HomeScreen";
import ConvMoedas from "../assets/screens/Conv/ConvMoedas";
import ConvMoedaDolar from "../assets/screens/Conv/ConvMoedaParaDolar";
import ConvDolarMoeda from "../assets/screens/Conv/ConvDolarParaMoedas";

const Stack = createNativeStackNavigator();

const StackRouters: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: false}} >
      <Stack.Screen name="SelectConv" component={SelectConv} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ConvMoedas" component={ConvMoedas} />
      <Stack.Screen name="ConvMoedaDolar" component={ConvMoedaDolar} />
      <Stack.Screen name="ConvDolarMoeda" component={ConvDolarMoeda} />
    </Stack.Navigator>
  );
}

export default StackRouters;