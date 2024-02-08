import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const InputPassword = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View className='flex-row gap-x-1 items-center'>
            <TextInput secureTextEntry={!showPassword} className='bg-gray-200 text-xl px-4 py-2 rounded-l-lg flex-1' testID='input' />
            <TouchableOpacity style={{ height: 44 }} onPress={() => setShowPassword((old) => !old)} className='items-center justify-center bg-gray-200 p-2 rounded-r-lg'>
                <Text>{showPassword ? 'Hide' : 'Show'}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default InputPassword