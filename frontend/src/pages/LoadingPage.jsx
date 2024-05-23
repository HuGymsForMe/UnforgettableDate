import { View, StyleSheet, Text } from 'react-native';
import HeaderImage from '../components/HeaderImage';

import { ActivityIndicator } from 'react-native-paper';

const LoadingPage = () => {

    return (
        <View className="w-full flex justify-center items-center min-h-full bg-[#4866d3]">
            <HeaderImage />
            <ActivityIndicator animating={true} color="#FAB959" size={60} />
            <Text className="text-white text-2xl text-bold">Cargando...</Text>
        </View>
    );
};

export default LoadingPage;
