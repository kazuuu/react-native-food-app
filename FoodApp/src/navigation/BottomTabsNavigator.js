import React from 'react';

import { Text, Platform, View, BackHandler } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from "../screens/HomeScreen"

import { COLORS, SIZES } from '../constants'
import { AppHeaderAvatar } from '../components';
export default () => {
    const BottomTab = createBottomTabNavigator();

    const TabButton = ({label, icon, focused}) => {
        return (
            <View
                style={{
                    flex: 1,
                    alignContent: 'center',
                    justifyContent: 'center',
                }}
            >
                <View style={{
                    backgroundColor: focused ? COLORS.primary : COLORS.white,
                    borderRadius: 25,
                    width: 50,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    {icon}

                    {focused ? 
                        <Text style={{
                            color: focused ? COLORS.white : COLORS.primary,
                            fontSize: SIZES.fontSmallest,
                        }}>
                            {label}
                        </Text> 
                        : 
                        <View />
                    }
                </View>                 
            </View>
        );

    }

    return (
        <BottomTab.Navigator
            screenOptions={({ route }) => ({
                headerShown: true,
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: COLORS.primary,
                },
                headerRight: (props) => <AppHeaderAvatar />,
                headerRightContainerStyle: {
                    right: SIZES.margin * 2,
                },
                unmountOnBlur: true,
                tabBarShowLabel: false,
                tabBarStyle: { 
                    height: 100,
                    width: '95%',
                    marginBottom: SIZES.margin * 3,
                    alignSelf: 'center',
                    borderRadius: 100,
                    backgroundColor: COLORS.gray,
                    paddingHorizontal: SIZES.margin,
                    paddingTop: Platform.OS === 'ios' ? 25 : 0, 
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <BottomTab.Screen 
                name="HomeTab" 
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabButton 
                            label='Home'
                            icon={<Ionicons
                                name='home'
                                size={20}
                                color={focused ? COLORS.white : COLORS.primary}   
                            />}
                            focused={focused}
                        />
                    )
                }}            
            />
            <BottomTab.Screen
                name="SearchTab"
                component={HomeScreen} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabButton 
                            label='Search'
                            icon={<Ionicons
                                name='md-search'
                                size={20}
                                color={focused ? COLORS.white : COLORS.primary}   
                            />}
                            focused={focused}
                        />
                    )
                }}
            />
            <BottomTab.Screen
                name="CartTab"
                component={HomeScreen} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabButton 
                            label='Home'
                            icon={<Ionicons
                                name='ios-cart-outline'
                                size={20}
                                color={focused ? COLORS.white : COLORS.primary}   
                            />}
                            focused={focused}
                        />
                    )
                }}
            />
            <BottomTab.Screen
                name="FavoriteTab"
                component={HomeScreen} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabButton 
                            label='Home'
                            icon={<Ionicons
                                name='heart-outline'
                                size={20}
                                color={focused ? COLORS.white : COLORS.primary}   
                            />}
                            focused={focused}
                        />
                    )
                }}
            />
            <BottomTab.Screen
                name="NotificationTab"
                component={HomeScreen} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabButton 
                            label='Home'
                            icon={<Ionicons
                                name='notifications-outline'
                                size={20}
                                color={focused ? COLORS.white : COLORS.primary}   
                            />}
                            focused={focused}
                        />
                    )
                }}
            />
        </BottomTab.Navigator>
    )
}