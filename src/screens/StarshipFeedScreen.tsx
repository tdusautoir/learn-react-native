import React from "react";
import { View, SafeAreaView, FlatList, Text, TouchableOpacity } from "react-native";
import SpaceShipCard from "@/components/SpaceShipCard/SpaceShipCard";
import { useStarships } from "@/hooks/useSpaceships";
import { StatusBar } from 'expo-status-bar';
import { Routes } from "@/navigation/Routes";
import { Offline } from "@/components/Offline/Offline";

export default function StarshipFeedScreen({ navigation }: { navigation: any }) {
    const { data, isLoading, isError, error } = useStarships();

    return (
        <>
            <SafeAreaView>
                <Offline />
                <StatusBar style="dark" />
                <View className="flex-row justify-between px-8 py-4 mb-4 border-b-2 border-gray-400" >
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text className="text-xl">&#60; Back</Text>
                    </TouchableOpacity>
                    <Text className="text-xl">Starships</Text>
                </View>
                {isLoading && <Text>Loading...</Text>}
                {!isLoading && data &&
                    <View className="w-full justify-center items-center">
                        <FlatList data={data.results}
                            ItemSeparatorComponent={() => (
                                <View className="bg-transparent h-8" />
                            )}
                            renderItem={({
                                item
                            }) => {
                                return (
                                    <TouchableOpacity onPress={() => {
                                        navigation.navigate(Routes.STARSHIP_DETAIL_SCREEN, {
                                            name: item.name,
                                            manufacturer: item.manufacturer,
                                            model: item.model,
                                            cost_in_credits: item.cost_in_credits,
                                            hyperdrive_rating: item.hyperdrive_rating,
                                        })
                                    }}>
                                        <SpaceShipCard {...item} />
                                    </TouchableOpacity>);
                            }} />
                    </View>
                }
                {isError && <Text>{error.message}</Text>}
            </SafeAreaView>
        </>
    );
}