import InputPassword from '@/components/InputPassword/InputPassword';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { navigation }

export default function LoginScreen({ navigation }: { navigation: any }) {
    return (
        // <SafeAreaView> 
        <KeyboardAvoidingView behavior='position'>
            <StatusBar style="light" />
            <View className="items-center justify-center bg-violet-600 w-full h-72">
                <Text className='text-4xl uppercase font-bold text-white'>Spacecraft</Text>
            </View>
            <View className='p-12 gap-4'>
                <Text className='text-4xl font-bold'>Login</Text>
                <View className='gap-y-2'>
                    <Text className='text-lg font-semibold'>Email</Text>
                    <TextInput keyboardType='email-address' className='bg-gray-200 text-xl px-4 py-2 rounded-lg' />
                </View>
                <View className='gap-y-2'>
                    <Text className='text-lg font-semibold'>Password</Text>
                    <InputPassword />
                </View>
                <View>
                    <TouchableOpacity style={{ height: 40 }} className='mt-4 items-center justify-center bg-violet-600 rounded-full'>
                        <Text className='font-bold text-white'>Send</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Terms')}>
                    <Text className='text-sm text-slate-500 text-center'>By login you accept the terms and conditions</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        // </SafeAreaView >
    );
}