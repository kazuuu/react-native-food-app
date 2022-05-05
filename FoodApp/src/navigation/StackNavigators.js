import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import BottomTabsNavigator from "./BottomTabsNavigator";

import { SIZES, COLORS } from '../constants'

const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login"
            screenOptions={{
                headerTintColor: COLORS.white,
                headerStyle: {
                    backgroundColor: COLORS.primary,
                },
                cardStyle: {
                    backgroundColor: 'blue',
                }
            }}
    >
            <Stack.Screen name='Login' component={LoginScreen}
                options={{ headerShown: false }} />
            <Stack.Screen name='Home' component={BottomTabsNavigator} />      
        </Stack.Navigator>
    );
}  