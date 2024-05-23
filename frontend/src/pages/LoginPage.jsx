import { View, TextInput, Text, TouchableHighlight, ActivityIndicator, StatusBar } from "react-native";
import HeaderImage from "../components/HeaderImage";

import { Formik } from "formik";
import { Link, useNavigate } from "react-router-native";


const LoginPage = () => {

    const navigate = useNavigate();

    const initialValues = {
        username:'',
        password:''
    }
    
    const onSubmit = (values) => {
        console.log(values)

        if (values.username == 'Pepe') {
            navigate('/home')
        }
    }    

    return(
        <>
            <HeaderImage />
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ handleChange, handleSubmit, values}) => {
                    return(
                        <View className="flex flex-col gap-6 w-full justify-center items-center">
                            <TextInput
                                className="bg-white border-2 border-slate-600 rounded-xl py-3 px-4 w-[80%] text-lg"
                                onChangeText={handleChange('username')}
                                placeholder="Nombre de usuario:"
                                value={values.username}
                            />
                            <TextInput
                                className="bg-white border-2 border-slate-600 rounded-xl py-3 px-4 w-[80%] text-lg"
                                onChangeText={handleChange('password')}
                                placeholder="Contraseña:"
                                value={values.password}
                                secureTextEntry
                            />
                            <View className="flex w-full justify-center items-center">
                            <TouchableHighlight onPress={handleSubmit} className="w-[80%] py-3 rounded-xl bg-[#648940] border-2 border-slate-500">
                                <View className="flex w-full justify-center items-center">
                                    <Text className="text-white font-bold text-lg">Iniciar Sesión</Text>
                                </View>
                            </TouchableHighlight>
                            </View>
                        </View>
                    )
                }}
            </Formik>
            <Link to={`/register`} className="mt-4 bg-[#4866d3]"><Text className="text-white font-bold text-md">¿Aún no te has registrado?</Text></Link>
        </>
    )
}

export default LoginPage;