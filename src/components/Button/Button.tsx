import { TouchableOpacity, View, Text } from "react-native";

const Button = () => (
    <View style={{ padding: 16, justifyContent: "space-between", flex: 1 }}>
        <TouchableOpacity style={{ height: 44 }} className='items-center justify-center bg-gray-200 p-2 rounded-r-lg'>
            <Text>Button</Text>
        </TouchableOpacity>
    </View>
);

export default Button;