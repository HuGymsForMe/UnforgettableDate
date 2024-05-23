import { View, TextInput, Image, TouchableHighlight, Text } from "react-native";

import { Link } from "react-router-native";

import { Formik } from "formik";

import HeaderImage from "../components/HeaderImage";

const RegisterPage = () => {

    const onSubmit = (values) => {
        console.log(values)
    }  

    const initialValues = {
        username:'',
        password:'',
        confirmPassword:'',
        age:'',
        email: ''
    }

    return(
        <>
        <Link to={`/`} className="absolute top-6 left-2 bg-[#4866d3] rounded-full"><Image className="h-[35px] w-[35px] bg-[#4866d3]" source={require('../../assets/flecha-volver.png')} /></Link>
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
                                onChangeText={handleChange('email')}
                                placeholder="Correo Electrónico:"
                                value={values.email}
                            />
                            <TextInput
                                className="bg-white border-2 border-slate-600 rounded-xl py-3 px-4 w-[80%] text-lg"
                                onChangeText={handleChange('password')}
                                placeholder="Contraseña:"
                                value={values.password}
                                secureTextEntry
                            />
                            <TextInput
                                className="bg-white border-2 border-slate-600 rounded-xl py-3 px-4 w-[80%] text-lg"
                                onChangeText={handleChange('confirmPassword')}
                                placeholder="Confirmar contraseña:"
                                value={values.confirmPassword}
                                secureTextEntry
                            />
                            <TextInput
                                className="bg-white border-2 border-slate-600 rounded-xl py-3 px-4 w-[80%] text-lg"
                                onChangeText={handleChange('age')}
                                placeholder="Edad:"
                                value={values.age}
                                keyboardType="numeric"
                            />
                            <TouchableHighlight onPress={handleSubmit} className="w-[80%] py-3 rounded-xl bg-[#648940] border-2 border-slate-500">
                                <View className="flex w-full justify-center items-center">
                                    <Text className="text-white font-bold text-lg">Regístrate</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    )
                }}
            </Formik>
        </>
    )
}

export default RegisterPage;