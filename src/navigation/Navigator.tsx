import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@/screens/LoginScreen';
import TermsScreen from "@/screens/TermsScreen";
import StarshipFeedScreen from "@/screens/StarshipFeedScreen";
import { Routes } from './Routes';
import StarshipDetailsScreen from '@/screens/StarshipDetailsScreen';

export default function Navigator() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Group>
                    <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
                    <Stack.Screen name={Routes.STARSHIP_FEED_SCREEN} component={StarshipFeedScreen} />
                    <Stack.Screen name={Routes.TERMS_SCREEN} component={TermsScreen} />
                </Stack.Group>
                <Stack.Group screenOptions={{ presentation: 'modal' }}>
                    <Stack.Screen name={Routes.STARSHIP_DETAIL_SCREEN} component={StarshipDetailsScreen} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    )
}