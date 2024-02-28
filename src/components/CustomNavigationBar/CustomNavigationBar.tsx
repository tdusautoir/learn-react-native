import { getHeaderTitle } from '@react-navigation/elements';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { Offline } from '../Offline/Offline';
import { StatusBar } from 'expo-status-bar';
import { useAuthContext } from '@/context/AuthContext';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CustomNavigationBar({ navigation, route, options, back }: any) {
    const title = getHeaderTitle(options, route.name);
    const { isSignedIn, toggleIsSignedIn } = useAuthContext();

    return (
        <SafeAreaView>
            <Offline />
            <StatusBar style="dark" />
            <View className="flex-row justify-between px-8 py-4 border-b-2 border-gray-400" >
                {back && <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text className="text-xl">Retour</Text>
                </TouchableOpacity>}
                {isSignedIn && <TouchableOpacity onPress={toggleIsSignedIn}>
                    <Text className="text-xl">Deconnexion</Text>
                </TouchableOpacity>}
                <Text className="text-xl">{title}</Text>
            </View>
        </SafeAreaView>
    );
}