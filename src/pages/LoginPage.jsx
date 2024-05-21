import { useState } from "react";

import { View, TextInput } from "react-native";
import HeaderImage from "../components/HeaderImage";
import ButtonAccess from "../components/ButtonAccess";

const LoginPage = () => {

    [usernameInput, setUsernameInput] = useState("");
    [passwordInput, setPasswordInput] = useState("");

    return(
        <View className="bg-[#4c70b9] flex justify-center items-center min-h-full">
            <HeaderImage />
            <View className="flex flex-col gap-6 w-full justify-center items-center">
                <TextInput
                    className="bg-white border-2 border-slate-600 rounded-xl py-2 px-4 w-[80%]"
                    onChangeText={usernameInput}
                    placeholder="Nombre de usuario:"
                />
                <TextInput
                    className="bg-white border-2 border-slate-600 rounded-xl py-2 px-4 w-[80%]"
                    onChangeText={passwordInput}
                    placeholder="Contraseña:"
                    keyboardAppearance=""
                />
                <View className="flex w-full justify-center items-center">
                <ButtonAccess>Iniciar Sesión</ButtonAccess>
                </View>
            </View>
            <Text className="absolute bottom-4 text-white">© EarnMoney. Todos los derechos reservados</Text>
        </View>
    )
}

export default LoginPage;