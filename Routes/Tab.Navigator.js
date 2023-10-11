import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons"; 

import HomeScreen from '../assets/screens/HomeScreen';
import Config from '../assets/screens/Config';
import StackRouters from "./Stack.Navigator";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{headerShown: false, tabBarStyle: {backgroundColor: '#9869F4'}}} >
            <Tab.Screen 
            name="Home"
            component={StackRouters}
            options={{
                tabBarLabel: 'Início',
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#ECECEC',
                tabBarIcon: ({size, focused}) => <Feather name="home" color={focused ? 'white' : '#ECECEC'} size={size} />
            }}
            />
            <Tab.Screen 
            name="Config."
            component={Config}
            options={{
                tabBarLabel: 'Config.',
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#ECECEC',
                tabBarIcon: ({size, focused}) => <Feather name="settings" color={focused ? 'white' : '#ECECEC'} size={size} />
            }}
            />
        </Tab.Navigator>
    )
}