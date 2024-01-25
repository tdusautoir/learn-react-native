import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <SafeAreaView>
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
                        <View className='flex-row gap-x-1 items-center'>
                            <TextInput secureTextEntry={!showPassword} className='bg-gray-200 text-xl px-4 py-2 rounded-l-lg flex-1' />
                            <TouchableOpacity style={{ height: 44 }} onPress={() => setShowPassword((old) => !old)} className='items-center justify-center bg-gray-200 p-2 rounded-r-lg'>
                                <Text>{showPassword ? 'Hide' : 'Show'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={{ height: 40 }} className='mt-4 items-center justify-center bg-violet-600 rounded-full'>
                            <Text className='font-bold text-white'>Send</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text className='text-sm text-slate-500 text-center'>By login you accept the terms and conditions</Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}