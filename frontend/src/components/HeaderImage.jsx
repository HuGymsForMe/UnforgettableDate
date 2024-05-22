import { Image, Text, View } from "react-native";

const HeaderImage = () => {
    return(
        <View className="flex flex-col justify-center items-center mb-16">
            <Image className="h-[150px] w-[150px]" source={require('../../assets/icon-unforgettable-date.png')} />
            <Text className="text-4xl text-white">UnforgettableDate</Text>
            <Text className="text-xl text-white">No lo olvides...</Text>
        </View>
    )
}

export default HeaderImage;