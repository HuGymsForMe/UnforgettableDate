import { View, TextInput, TouchableHighlight, Text, ScrollView } from "react-native";
import { Appbar } from "react-native-paper";
import { useNavigate } from "react-router-native";

import { Formik } from "formik";

import HeaderImage from "../components/HeaderImage";
import HeaderReturns from "../components/HeaderReturns";

const RegisterPage = () => {

    /******* VALIDAMOS EL FORMULARIO DE REGISTRO *******/
    const onSubmit = (values) => {
        console.log(values)
    }  

    const navigate = useNavigate();

    /******* ENLACES A DIFERENTES PESTAÑAS DE LA APLICACIÓN *******/
    const navigateLogin = () => {
        navigate('/');
    }

    const initialValues = {
        username:'',
        password:'',
        confirmPassword:'',
        age:'',
        email: ''
    }

    return(
        <ScrollView className="w-full flex min-h-full bg-[#4866d3]">
        <HeaderReturns onNavigate={navigateLogin} />
        <HeaderImage />
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ handleChange, handleSubmit, values}) => {
                    return(
                        <View className="flex flex-col w-full justify-center items-center">
                            <TextInput
                                className="bg-white border-2 border-slate-600 rounded-xl my-3 py-3 px-4 w-[80%] text-lg"
                                onChangeText={handleChange('username')}
                                placeholder="Nombre de usuario:"
                                value={values.username}
                            />
                            <TextInput
                                className="bg-white border-2 border-slate-600 rounded-xl my-3 py-3 px-4 w-[80%] text-lg"
                                onChangeText={handleChange('email')}
                                placeholder="Correo Electrónico:"
                                value={values.email}
                            />
                            <TextInput
                                className="bg-white border-2 border-slate-600 rounded-xl my-3 py-3 px-4 w-[80%] text-lg"
                                onChangeText={handleChange('password')}
                                placeholder="Contraseña:"
                                value={values.password}
                                secureTextEntry
                            />
                            <TextInput
                                className="bg-white border-2 border-slate-600 rounded-xl my-3 py-3 px-4 w-[80%] text-lg"
                                onChangeText={handleChange('confirmPassword')}
                                placeholder="Confirmar contraseña:"
                                value={values.confirmPassword}
                                secureTextEntry
                            />
                            <TextInput
                                className="bg-white border-2 border-slate-600 rounded-xl my-3 py-3 px-4 w-[80%] text-lg"
                                onChangeText={handleChange('age')}
                                placeholder="Edad:"
                                value={values.age}
                                keyboardType="numeric"
                            />
                            <TouchableHighlight onPress={handleSubmit} className="w-[80%] my-4 mb-8 py-3 rounded-xl bg-[#648940] border-2 border-slate-500">
                                <View className="flex w-full justify-center items-center">
                                    <Text className="text-white font-bold text-lg">Regístrate</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    )
                }}
            </Formik>
        </ScrollView>
    )
}

export default RegisterPage;