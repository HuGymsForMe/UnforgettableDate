import { FlatList, ScrollView } from "react-native";
import { useNavigate } from "react-router-native";

import tasks from "../data/tasks.js";

import TaskComponent from "../components/TaskComponent";
import HeaderReturns from "../components/HeaderReturns.jsx";

const ShowTasksPage = () => {

    const navigate = useNavigate();

    /******* ENLACES A DIFERENTES PESTAÑAS DE LA APLICACIÓN *******/
    const navigateHome = () => {
        navigate('/home')
    }
    
    return(
        <ScrollView className="bg-[#4866d3]">
            <HeaderReturns onNavigate={navigateHome} />
            <FlatList 
            className="w-full pb-8"
            data={tasks}
            renderItem={({ item: task })  => (
                <TaskComponent {...task} />
            )}
            >
            </FlatList>
        </ScrollView>
    )
}

export default ShowTasksPage;