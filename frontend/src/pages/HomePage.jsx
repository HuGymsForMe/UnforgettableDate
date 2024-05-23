import { View, Text, Image, TouchableHighlight } from "react-native";
import HeaderImage from "../components/HeaderImage";

import { Link } from "react-router-native";

const HomePage = () => {

    const name = "Pepe";

    return(
        <>
            <Link to={`/`} className="absolute top-6 left-2 bg-[#4866d3] rounded-full"><Image className="h-[35px] w-[35px] bg-[#4866d3]" source={require('../../assets/flecha-volver.png')} /></Link>
            <HeaderImage />
            <Image className="h-[80px] w-[80px] mb-4" source={require('../../assets/usuario.png')} />
            <Text className="text-xl text-white mb-8">Bienvenido, {name}</Text>
            <View className="flex w-full justify-center items-center gap-4">
                <TouchableHighlight className="w-[80%] py-3 rounded-xl bg-[#648940] border-2 border-slate-500">
                    <View className="flex w-full justify-center items-center">
                        <Text className="text-white font-bold text-lg">Añadir Recordatorio</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight className="w-[80%] py-3 rounded-xl bg-[#648940] border-2 border-slate-500">
                    <View className="flex w-full justify-center items-center">
                        <Text className="text-white font-bold text-lg">Ver Recordatorios</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight className="w-[80%] py-3 rounded-xl bg-[#648940] border-2 border-slate-500">
                    <View className="flex w-full justify-center items-center">
                        <Text className="text-white font-bold text-lg">Buscar Recordatorios</Text>
                    </View>
                </TouchableHighlight>
            </View>
            {/* <Text className="absolute bottom-4 text-white font-bold">© Unforgettable Date. Todos los derechos reservados</Text> */}
        </>
    )
}

export default HomePage;