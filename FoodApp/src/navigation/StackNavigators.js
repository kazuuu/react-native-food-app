import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import BottomTabsNavigator from "./BottomTabsNavigator";

import { SIZES, COLORS, icons, dummyData, fakeDataAPI } from '../constants'
import { CustomAppBar } from "../components";

const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login"
            screenOptions={{
                headerTintrColor: COLORS.white,
                headerStyle: {
                    backgroundColor: COLORS.primary,
                },
                cardStyle: {
                    backgroundColor: 'blue',
                },
                headerTitle: (props) => <CustomAppBar
                    title={props.children}
                />,
            }}
        >
            <Stack.Screen name='Login' component={LoginScreen}
                options={{ headerShown: false }} />
            <Stack.Screen name='Home' component={BottomTabsNavigator} />      
        </Stack.Navigator>
    );
}  
