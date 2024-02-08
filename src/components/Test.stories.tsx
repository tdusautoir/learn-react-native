import React from "react";
import { View, Text } from "react-native";
export default {
    title: "Text",
};

export const Default = () => (
    <View style={{ padding: 16, justifyContent: "space-between", flex: 1 }}>
        <Text className='text-xl'>Display Large</Text>
        <Text className='text-md'>Display Medium</Text>
        <Text className='text-sm'>Display small</Text>

        <Text className='text-xl'>Headline Large</Text>
        <Text className='text-md'>Headline Medium</Text>
        <Text className='text-sm'>Headline Small</Text>
    </View>
);

Default.story = {
    name: "Default",
};