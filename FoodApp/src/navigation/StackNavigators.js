import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import BottomTabsNavigator from "./BottomTabsNavigator";

import { SIZES, COLORS, icons, dummyData, fakeDataAPI } from '../constants'
import { AppHeaderAvatar } from "../components";

const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login"
            screenOptions={{
                headerShown: true,
                headerTintrColor: COLORS.white,
                headerStyle: {
                    backgroundColor: COLORS.primary,
                },
                headerRight: (props) => <AppHeaderAvatar />,
            }}
        >
            <Stack.Screen name='Login' component={LoginScreen}
                options={{ headerShown: false }} 
            />
            <Stack.Screen name='BottomTabsNavigator' component={BottomTabsNavigator} 
                options={{ headerShown: false }} 
            />      
        </Stack.Navigator>
    );
}  
