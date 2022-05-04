import React from 'react';
import { Text, Platform } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeScreen from "../screens/HomeScreen"

export default () => {
    const BottomTab = createBottomTabNavigator();

    return (
            <BottomTab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    unmountOnBlur: true,
                    tabBarShowLabel: false,
                    tabBarStyle: { height: Platform.OS === 'ios' ? 100 : 50 },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <BottomTab.Screen 
                    name="HomeTab" 
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <>
                                <MaterialCommunityIcons
                                    name='home'
                                    size={20}
                                    color={focused ? '#ee125a' : '#91A2AD'}
                                />
                                <Text
                                    allowFontScaling={false}
                                    style={{
                                        color: focused ? '#ee125a' : '#91A2AD',
                                        width: 50,
                                        fontSize: 11,
                                        textAlign: 'center'
                                    }}>
                                    Home
                                </Text>
                            </>
                        )
                    }}            
                />
                <BottomTab.Screen
                    name="MessageTab"
                    component={HomeScreen} 
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <>
                                <MaterialCommunityIcons
                                    name='message'
                                    size={20}
                                    color={focused ? '#ee125a' : '#91A2AD'}
                                />
                                <Text
                                    allowFontScaling={false}
                                    style={{
                                        color: focused ? '#ee125a' : '#91A2AD',
                                        width: 50,
                                        fontSize: 11,
                                        textAlign: 'center'
                                    }}>
                                    Message
                                </Text>
                            </>
                        )
                    }}
                />
                <BottomTab.Screen
                    name="AccountTab"
                    component={HomeScreen} 
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <>
                                <MaterialCommunityIcons
                                    name='account'
                                    size={20}
                                    color={focused ? '#ee125a' : '#91A2AD'}
                                />
                                <Text
                                    allowFontScaling={false}
                                    style={{
                                        color: focused ? '#ee125a' : '#91A2AD',
                                        width: 50,
                                        fontSize: 11,
                                        textAlign: 'center'
                                    }}>
                                    Account
                                </Text>
                            </>
                        )
                    }}
                />
            </BottomTab.Navigator>
    )
}