import React from "react";
import { View, SafeAreaView, FlatList, Text, TouchableOpacity } from "react-native";
import SpaceShipCard from "@/components/SpaceShipCard/SpaceShipCard";
import { useStarships } from "@/hooks/useSpaceships";
import { Routes } from "@/navigation/Routes";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function StarshipFeedScreen({ navigation }: { navigation: any }) {
    const { data, isLoading, isError, error } = useStarships();

    return (
        <>
            <SafeAreaView>
                {isLoading && <Text>Loading...</Text>}
                {!isLoading && data &&
                    <View className="w-full justify-center items-center mt-4">
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