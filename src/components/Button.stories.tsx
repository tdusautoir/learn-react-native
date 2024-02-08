import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

export default {
    title: "Button",
};

export const Default = () => (
    <View style={{ padding: 16, justifyContent: "space-between", flex: 1 }}>
        <TouchableOpacity style={{ height: 44 }} className='items-center justify-center bg-gray-200 p-2 rounded-r-lg'>
            <Text>Button</Text>
        </TouchableOpacity>
    </View>
);

Default.story = {
    name: "Default",
};