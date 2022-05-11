import React from 'react';
import { Text, Platform, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import CartScreen from "../screens/CartScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import NotificationScreen from "../screens/NotificationScreen";

import { SIZES, COLORS } from '../constants';
import { AppHeaderAvatar } from '../components';

export default () => {
    const BottomTab = createBottomTabNavigator();

    const TabButton = ({label, icon, focused}) => {
        return (
            <View
                style={[
                    {
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                ]}
            >
                <View
                    style={[
                        {
                            flexDirection: 'column',
                            height: 50, 
                            minWidth: 50,
                            paddingHorizontal: SIZES.margin,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 25,
                            backgroundColor: focused ? COLORS.primary : COLORS.white,
                        },
                    ]}
                >
                    {icon}

                    {focused &&
                        <Text
                            numberOfLines={1}
                            style={{
                                color: focused ? COLORS.white : COLORS.primary,
                                fontSize: SIZES.fontSmallest,
                            }}
                        >
                            {label}
                        </Text>
                    }
                </View>
            </View>
        )
    }

    return (
            <BottomTab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: true,
                    headerTintColor: COLORS.white,
                    headerStyle: {
                        backgroundColor: COLORS.primary,
                    },
                    headerRight: (props) => <AppHeaderAvatar />,
                    headerRightContainerStyle: {
                        right: SIZES.margin*2,
                    },
                    unmountOnBlur: true,
                    tabBarShowLabel: false,
                    tabBarStyle: { 
                        width: '95%',
                        height: 100,
                        marginBottom: SIZES.margin * 3,
                        alignSelf: 'center',
                        paddingHorizontal: SIZES.margin,
                        paddingTop: Platform.OS === 'ios' ? 25 : 0,
                        backgroundColor: COLORS.gray,
                        borderRadius: 100,
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}

            >
                <BottomTab.Screen 
                    name="Home" 
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <TabButton
                                label='Home'
                                focused={focused}
                                icon={<Ionicons
                                        name='home'
                                        size={20}
                                        color={focused ? COLORS.white : COLORS.primary}
                                />}
                            />
                        )
                    }}            
                />
                <BottomTab.Screen
                    name="Search"
                    component={SearchScreen} 
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <TabButton
                                label='Search'
                                focused={focused}
                                icon={<Ionicons
                                        name='md-search-sharp'
                                        size={20}
                                        color={focused ? COLORS.white : COLORS.primary}
                                />}
                            />
                        )
                    }}
                />
                <BottomTab.Screen
                    name="Carrinho"
                    component={CartScreen} 
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <TabButton
                                label='Carrinho'
                                focused={focused}
                                icon={<Ionicons
                                        name='ios-cart-outline'
                                        size={20}
                                        color={focused ? COLORS.white : COLORS.primary}
                                />}
                            />
                        )
                    }}
                />
                <BottomTab.Screen
                    name="Favorite"
                    component={FavoriteScreen} 
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <TabButton
                                label='Favorite'
                                focused={focused}
                                icon={<Ionicons
                                        name='heart-outline'
                                        size={20}
                                        color={focused ? COLORS.white : COLORS.primary}
                                />}
                            />
                        )
                    }}
                />
                <BottomTab.Screen
                    name="Notification"
                    component={NotificationScreen} 
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <TabButton
                                label='Notification'
                                focused={focused}
                                icon={<Ionicons
                                        name='notifications-outline'
                                        size={20}
                                        color={focused ? COLORS.white : COLORS.primary}
                                />}
                            />
                        )
                    }}
                />
            </BottomTab.Navigator>
    )
}