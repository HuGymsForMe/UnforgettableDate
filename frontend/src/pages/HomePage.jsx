import { View, Text, Image } from "react-native";
import { Appbar, Button } from "react-native-paper";
import { useNavigate } from "react-router-native";

import HeaderImage from "../components/HeaderImage";
import HeaderReturns from "../components/HeaderReturns";

const HomePage = () => {

    const navigate = useNavigate();

    /******* ENLACES A DIFERENTES PESTAÑAS DE LA APLICACIÓN *******/
    const navigateShowTasks = () => {
        navigate('/show-tasks');
    }

    const navigateLogin = () => {
        navigate('/');
    }

    const navigateAddTask = () => {
        navigate('/add-task')
    }

    const name = "Pepe";

    return(
        <View>
            <HeaderReturns onNavigate={navigateLogin} />
            <View className="bg-[#4866d3] flex items-center h-full">
                <HeaderImage />
                <Image className="h-[80px] w-[80px] mb-4 mt-4" source={require('../../assets/usuario.png')} />
                <Text className="text-xl text-white mb-8">Bienvenido, {name}</Text>
                <View className="flex w-full justify-center items-center gap-4">
                    <Button className="w-[80%] my-2 py-1 rounded-xl bg-[#648940] border-2 border-slate-500">
                        <Text className="text-white font-bold text-lg text-center">Buscar Recordatorio</Text>
                    </Button>
                    <Button onPress={navigateAddTask} className="w-[80%] py-1 my-2 rounded-xl bg-[#648940] border-2 border-slate-500">
                        <Text className="text-white font-bold text-lg text-center">Añadir Recordatorio</Text>
                    </Button>
                    <Button onPress={navigateShowTasks} className="w-[80%] py-1 my-2 rounded-xl bg-[#648940] border-2 border-slate-500">
                        <Text className="text-white font-bold text-lg text-center">Ver Recordatorios</Text>
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default HomePage;