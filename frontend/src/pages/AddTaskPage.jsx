import { View, Text, Platform, TextInput, TouchableHighlight, ScrollView } from "react-native";
import { useNavigate } from "react-router-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { Formik } from "formik";

import HeaderReturns from "../components/HeaderReturns";

import { useState } from "react";
import HeaderImage from "../components/HeaderImage";
import { RadioButton } from "react-native-paper";

const AddTaskPage = () => {

    const navigate = useNavigate();

    const initialValues = {
        title:'',
        category:'',
        date: '',
        time: '',
        notification: true,
    }
    
    /******* VALIDAMOS EL FORMULARIO DE LOGEO *******/
    const onSubmit = (values) => {
        console.log(values)
    } 

    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [textFDate, setTextFDate] = useState('');
    const [textFTime, setTextFTime] = useState('');
    const [checked, setChecked] = useState('first')

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = `${tempDate.getDate()}-${tempDate.getMonth() + 1}-${tempDate.getFullYear()}`;
        let fTime = `${tempDate.getHours().toString().padStart(2, "0")}:${tempDate.getMinutes().toString().padStart(2, "0")}`;
        setTextFDate(fDate);
        setTextFTime(fTime);
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode)
    }

    const navigateHome = () => {
        navigate("/home");
    }

    return(
        <ScrollView className="w-full flex min-h-full bg-[#4866d3]">
            <HeaderReturns onNavigate={navigateHome} />
            <View>
            <HeaderImage />
            <Text className="text-center text-white text-2xl font-d -mt-4 mb-4">Añadir un recordatorio</Text>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ handleChange, handleSubmit, values }) => {
                    return(
                        <View className="flex items-center h-full gap-4">
                            <TextInput
                                className="bg-white border-2 border-slate-600 my-3 rounded-xl py-3 px-4 w-[80%] text-lg"
                                onChangeText={handleChange('title')}
                                placeholder="Título:"
                                value={values.title}
                            />
                            <Dropdown 
                                placeholder="Categoría"
                                
                            />
                            <TextInput
                                className="bg-white border-2 border-slate-600 my-3 rounded-xl py-3 px-4 w-[80%] text-lg"
                                onChangeText={handleChange('category')}
                                placeholder="Categoría:"
                                value={values.category}
                            />
                            <TouchableHighlight onPress={() => showMode('date')} className="w-[80%]">
                                <Text className="text-[#648940] font-extrabold text-center text-lg py-3 bg-white border-2 border-slate-500 rounded-lg">Selecciona una fecha</Text>
                            </TouchableHighlight>
                            <Text className="text-white text-xl">{textFDate}</Text>
                            <TouchableHighlight onPress={() => showMode('time')} className="w-[80%]">
                                <Text className="text-[#648940] font-extrabold text-center text-lg py-3 bg-white border-2 border-slate-500 rounded-lg">Selecciona una hora</Text>
                            </TouchableHighlight>
                            <Text className="text-white text-xl">{textFTime}</Text>
                            <Text className="text-white text-xl w-[80%]">Notificaciones:</Text>
                            <View className="flex flex-row justify-center items-center">
                                <View className="flex flex-row justify-center items-center mx-4">
                                    <RadioButton
                                        value={true}
                                        status={checked === 'first' ? 'checked' : 'unchecked'} 
                                        onPress={() => setChecked('first')}
                                        color="white"
                                        uncheckedColor="white"
                                    />
                                    <Text className="text-white text-lg">SI</Text>
                                </View>
                                <View className="flex flex-row justify-center items-center mx-4">
                                    <RadioButton
                                        value={false}
                                        status={checked === 'second' ? 'checked' : 'unchecked'} 
                                        onPress={() => setChecked('second')}
                                        color="white"
                                        uncheckedColor="white"
                                    />
                                    <Text className="text-white text-lg">NO</Text>
                                </View>
                            </View>
                            <TouchableHighlight onPress={handleSubmit} className="w-[80%] my-4 mb-8 py-3 rounded-xl bg-[#648940] border-2 border-slate-500">
                                <View className="flex w-full justify-center items-center">
                                    <Text className="text-white font-bold text-lg">Añadir Recordatorio</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    )
                }}
            </Formik>
            </View>
            {show && (
            <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
             />
            )}
        </ScrollView>
    )
}

export default AddTaskPage;