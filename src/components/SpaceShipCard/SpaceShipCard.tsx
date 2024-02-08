import { View, Text, Image } from "react-native"

type Props = {
    name: string,
    model: string,
    manufacturer: string,
    cost_in_credits: string,
    hyperdrive_rating: string,
}

export default function SpaceShipCard(props: Props) {
    const source = useImage(props.name);

    return <View className="bg-gray-200 mx-6 rounded-xl">
        <Image source={source} className="w-full rounded-t-xl" />
        <View className="p-6">
            <Text className="text-xl">{props.name}</Text>
            <Text>Model : {props.model}</Text>
            <Text>Manufacturer : {props.manufacturer}</Text>
            <Text>Cost in credits : {props.cost_in_credits}</Text>
            <Text>Hyperdrive rating : {props.hyperdrive_rating}</Text>
        </View>
    </View>
}

const useImage = (title: string) => {
    const imageName = `${title.toLowerCase().replace(" ", "")}`;

    let source;
    switch (imageName) {
        case "cr90corvette":
            source = require("../../../assets/starships/CR90corvette.jpg");
            break;
        case "stardestroyer":
            source = require("../../../assets/starships/stardestroyer.jpg");
            break;
        case "sentinel-classlanding craft":
            source = require("../../../assets/starships/sentinel-classlandingcraft.jpg");
            break;
        case "deathstar":
            source = require("../../../assets/starships/deathstar.jpg");
            break;
        case "millenniumfalcon":
            source = require("../../../assets/starships/millenniumfalcon.jpg");
            break;
        case "y-wing":
            source = require("../../../assets/starships/y-wing.jpg");
            break;
        case "x-wing":
            source = require("../../../assets/starships/x-wing.jpg");
            break;
        case "tieadvanced x1":
            source = require("../../../assets/starships/tieadvancedx1.jpg");
            break;
        case "executor":
            source = require("../../../assets/starships/executor.jpg");
            break;
        case "rebeltransport":
            source = require("../../../assets/starships/rebeltransport.jpg");
            break;
    }
    return source;
};