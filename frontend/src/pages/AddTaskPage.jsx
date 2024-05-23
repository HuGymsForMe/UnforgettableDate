import { View, Text, Image } from "react-native";

import { Link } from "react-router-native";

const AddTaskPage = () => {
    return(
        <>
            <Link to={`/home`} className="absolute top-6 left-2 bg-[#4866d3] rounded-full"><Image className="h-[35px] w-[35px] bg-[#4866d3]" source={require('../../assets/flecha-volver.png')} /></Link>
            <Text>Task añadidas</Text>
        </>
    )
}

export default AddTaskPage;