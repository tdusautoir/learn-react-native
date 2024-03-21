import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TermsScreen from "@/screens/TermsScreen";
import StarshipFeedScreen from "@/screens/StarshipFeedScreen";
import { Routes } from './Routes';
import StarshipDetailsScreen from '@/screens/StarshipDetailsScreen';
import CustomNavigationBar from '@/components/CustomNavigationBar/CustomNavigationBar';


export default function RootNavigator() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ header: (props) => <CustomNavigationBar {...props} /> }}>
                <Stack.Group>
                    <Stack.Screen name={Routes.STARSHIP_FEED_SCREEN} component={StarshipFeedScreen} />
                    <Stack.Screen name={Routes.TERMS_SCREEN} component={TermsScreen} />
                </Stack.Group>
                <Stack.Group screenOptions={{ headerShown: false, presentation: 'modal' }}>
                    <Stack.Screen name={Routes.STARSHIP_DETAIL_SCREEN} component={StarshipDetailsScreen} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer >
    )
}

