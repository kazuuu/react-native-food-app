import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import AccountScreen from '../screens/AccountScreen';
import MessageScreen from '../screens/MessageScreen';
import OneScreen from '../screens/OneScreen';
import BottomTabsNavigator from './BottomTabsNavigator';

const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login"
            screenOptions={{
                headerShown: 'true',
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#ee125a',
                },
            }}
        >
            <Stack.Screen name='Login' component={LoginScreen}
                options={{ headerShown: false }} />
            <Stack.Screen name='BottomTabsNavigator' component={BottomTabsNavigator}
                options={{ headerShown: false }} />
            <Stack.Screen name="Message" component={MessageScreen} />
            <Stack.Screen name="Account" component={AccountScreen} />
            <Stack.Screen name="One" component={OneScreen} />
        </Stack.Navigator>
    );
}