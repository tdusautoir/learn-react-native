import React from "react";
import { View, Text } from "react-native";

export default {
    title: "Card",
};

export const Default = () => (
    <View className="bg-gray-200 mx-6 rounded-xl">
        <View className="w-full rounded-t-xl h-4" />
        <View className="p-6">
            <Text className="text-xl">Card</Text>
            <Text>Informations</Text>
        </View>
    </View>
);

Default.story = {
    name: "Default",
};