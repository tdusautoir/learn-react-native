/* eslint-disable @typescript-eslint/no-explicit-any */
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

type Props = {
    navigation: any,
    route: any
}

const StarshipDetailsScreen = ({ navigation, route }: Props) => {
    return (
        <SafeAreaView>
            <View className="flex-row justify-between px-8 py-4 border-b-2 border-gray-400" >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text className="text-xl">&#60; Back</Text>
                </TouchableOpacity>
                <Text className="text-xl">{route.params.name}</Text>
            </View>
            <View className='p-8'>
                <Text className="text-2xl">Details</Text>
                <Text className='text-slate-500'>Informations</Text>

                <View className='pt-4 gap-2'>
                    <Text>Name: {route.params.name}</Text>
                    <Text>Model : {route.params.model}</Text>
                    <Text>Manufacturer: {route.params.name}</Text>
                    <Text>Cost in credits : {route.params.cost_in_credits}</Text>
                    <Text>Hyperdrive rating : {route.params.hyperdrive_rating}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default StarshipDetailsScreen