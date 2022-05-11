import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import BottomTabsNavigator from './BottomTabsNavigator';
import { AppHeaderAvatar } from '../components';

import { COLORS, SIZES } from '../constants'

const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login"
            screenOptions={{
                headerShown: true,
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: COLORS.primary,
                },
                headerRight: (props) => <AppHeaderAvatar />,              
            }}
        >
            <Stack.Screen name='Login' 
                component={LoginScreen} 
                options={{ headerShown: false }} />
            <Stack.Screen name='BottomTabsNavigator' component={BottomTabsNavigator} 
                options={{ headerShown: false }} />
            <Stack.Screen name="Message" component={MessageScreen} />
            <Stack.Screen name="Account" component={AccountScreen} />
            <Stack.Screen name="One" component={OneScreen} />
        </Stack.Navigator>
    );
}