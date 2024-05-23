import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import HeaderImage from '../components/HeaderImage';

const LoadingPage = () => {

    return (
        <View className="w-full flex justify-center items-center min-h-full bg-[#4866d3]">
            <HeaderImage />
            <ActivityIndicator size='large' color="#000" />
            <Text className="text-white text-xl text-bold">Cargando...</Text>
        </View>
    );
};

export default LoadingPage;
