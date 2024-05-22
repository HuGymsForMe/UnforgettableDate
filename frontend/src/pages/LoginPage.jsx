import { useState } from "react";

import { View, TextInput } from "react-native";
import { Link, useNavigate } from "react-router-native";
import HeaderImage from "../components/HeaderImage";
import ButtonAccess from "../components/ButtonAccess";

const LoginPage = () => {

    [usernameInput, setUsernameInput] = useState("");
    [passwordInput, setPasswordInput] = useState("");

    return(
        <>
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
        </>
    )
}

export default LoginPage;