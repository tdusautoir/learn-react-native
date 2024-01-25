import React from "react";
import { StyleSheet, StatusBar, View, Text, ScrollView, Platform, SafeAreaView, FlatList } from "react-native";
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { default as data } from "../../api/data.json";
import SpaceShipCard from "../../components/SpaceShipCard";

export const StarshipFeedScreen = () => {
    return (
        <>
            <SafeAreaView>
                <View className="w-full justify-center items-center">
                    <FlatList data={data.results}
                        ItemSeparatorComponent={({ highlighted }) => (
                            <View className="bg-transparent h-8" />
                        )}
                        renderItem={({
                            item,
                            index,
                            separators: { highlight, unhighlight },
                        }) => {
                            return <SpaceShipCard {...item} />
                        }} />
                </View>
            </SafeAreaView>
        </>
    );
};