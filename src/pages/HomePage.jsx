import { View, Text, Image } from "react-native";
import HeaderImage from "../components/HeaderImage";
import ButtonAccess from "../components/ButtonAccess";

const HomePage = () => {

    const name = "Hugo";

    return(
        <View className="bg-[#4c70b9] flex justify-center items-center min-h-full">
            <HeaderImage />
            <Image className="h-[80px] w-[80px] mb-4" source={require('../../assets/usuario.png')} />
            <Text className="text-xl text-white mb-8">Bienvenido, {name}</Text>
            <View className="flex w-full justify-center items-center">
                <ButtonAccess>Añadir Recordatorio</ButtonAccess>
                <ButtonAccess>Ver Recordatorios</ButtonAccess>
                <ButtonAccess>Buscar Recordatorio</ButtonAccess>
            </View>
            <Text className="absolute bottom-4 text-white font-bold">© Unforgettable Date. Todos los derechos reservados</Text>
        </View>
    )
}

export default HomePage;