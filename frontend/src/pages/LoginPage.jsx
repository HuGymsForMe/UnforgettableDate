import { View, TextInput, Text, TouchableHighlight } from "react-native";
import HeaderImage from "../components/HeaderImage";

import { Formik } from "formik";
import { Link, useNavigate } from "react-router-native";

import { Button } from "react-native-paper";


const LoginPage = () => {

    const navigate = useNavigate();

    const initialValues = {
        username:'',
        password:''
    }
    
    /******* VALIDAMOS EL FORMULARIO DE LOGEO *******/
    const onSubmit = (values) => {
        console.log(values)

        if (values.username == 'Pepe') {
            navigate('/home');
        }
    }   

    /******* ENLACES A DIFERENTES PESTAÑAS DE LA APLICACIÓN *******/
    const navigateRegister = () => {
        navigate('/register');
    }

    return(
        <View className="flex justify-center items-center min-h-full bg-[#4866d3]">
            <HeaderImage />
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ handleChange, handleSubmit, values}) => {
                    return(
                        <View className="flex flex-col w-full justify-center items-center">
                            <TextInput
                                className="bg-white border-2 border-slate-600 my-3 rounded-xl py-3 px-4 w-[80%] text-lg"
                                onChangeText={handleChange('username')}
                                placeholder="Nombre de usuario:"
                                value={values.username}
                            />
                            <TextInput
                                className="bg-white border-2 border-slate-600 my-3 rounded-xl py-3 px-4 w-[80%] text-lg"
                                onChangeText={handleChange('password')}
                                placeholder="Contraseña:"
                                value={values.password}
                                secureTextEntry
                            />
                            <View className="flex w-full justify-center items-center">
                            <TouchableHighlight onPress={handleSubmit} className="w-[80%] my-4 py-3 rounded-xl bg-[#648940] border-2 border-slate-500">
                                <View className="flex w-full justify-center items-center">
                                    <Text className="text-white font-bold text-lg">Iniciar Sesión</Text>
                                </View>
                            </TouchableHighlight>
                            </View>
                        </View>
                    )
                }}
            </Formik>
            <Button onPress={navigateRegister}>
                <Text className="text-white text-lg">¿Aún no te has registrado?</Text>
            </Button>
        </View>
    )
}

export default LoginPage;