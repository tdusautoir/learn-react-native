import React from "react";
import { View, SafeAreaView, FlatList, Text } from "react-native";
import SpaceShipCard from "@/components/SpaceShipCard/SpaceShipCard";
import { useStarships } from "@/hooks/useSpaceships";
import { StatusBar } from 'expo-status-bar';
import { ScreenContainer } from "react-native-screens";

export default function StarshipFeedScreen() {
    const { data, isLoading, isError, error } = useStarships();

    return (
        <ScreenContainer>
            <SafeAreaView>
                <StatusBar style="dark" />
                {isLoading && <Text>Loading...</Text>}
                {!isLoading && data &&
                    <View className="w-full justify-center items-center">
                        <FlatList data={data.results}
                            ItemSeparatorComponent={() => (
                                <View className="bg-transparent h-8" />
                            )}
                            renderItem={({
                                item,
                            }) => {
                                return <SpaceShipCard {...item} />
                            }} />
                    </View>
                }
                {isError && <Text>{error.message}</Text>}
            </SafeAreaView>
        </ScreenContainer>
    );
}