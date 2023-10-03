import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import Ficha from './screens/Ficha'
import ConvMoedas from './screens/ConvMoedaParaDollar';

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'white', // Cor das guias ativas
          inactiveTintColor: '#efefef', // Cor das guias inativas
          labelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
          },
        }}
        tabBarStyle={{
          backgroundColor: '#9869F4', // Cor de fundo do tabNavigator
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('./Imagens/casa.png')}
                style={{ width: size, height: size, tintColor: color }}
              />
            ),
            tabBarStyle: {
              backgroundColor: '#9869F4', // Cor de fundo específica para a tela HomeScreen
            },
          }}
        />
        <Tab.Screen
          name="Ficha"
          component={Ficha}
          options={{
            tabBarLabel: 'Ficha',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('./Imagens/ficha.png')}
                style={{ width: size, height: size, tintColor: color }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Configurações"
          component={ConvMoedas}
          options={{
            tabBarLabel: 'Configurações',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('./Imagens/engrenagem.png')}
                style={{ width: size, height: size, tintColor: color }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
