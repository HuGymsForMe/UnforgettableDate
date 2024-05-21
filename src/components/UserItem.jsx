import React from "react";
import { View, Text, Image } from "react-native";

const UserItem = (props) => (
    <View key={props.id} className="flex flex-col gap-2">
        <View className="flex justify-center items-center">
            <Image source={require('../../assets/usuario.png')} className="w-[40px] h-[40px]" />
        </View>
        <Text className="font-bold text-white text-2xl text-center">{props.nombre}</Text>
        <View className="flex flex-row justify-evenly items-center">
            <View className="flex flex-col">
                <Text className="text-white font-bold text-center">ID</Text>
                <Text className="text-white text-center">{props.id}</Text>
            </View>
            <View className="flex flex-col">
                {props.activo && (<Text className="text-white font-bold">Usuario Activo</Text>)}
            </View>
            <View className="flex flex-col">
                <Text className="text-white font-bold text-center">Edad</Text>
                <Text className="text-white text-center">{props.edad}</Text>
            </View>
        </View>
    </View>
)

export default UserItem;