import { Text, FlatList, View } from "react-native";

import tasks from "../data/tasks.js";
import TaskComponent from "../components/TaskComponent";

const ShowTasksPage = () => {
    return(
        <FlatList 
        className="w-full pt-16 pb-12"
        data={tasks}
        renderItem={({ item: task })  => (
            <TaskComponent {...task} />
        )}
        >
        </FlatList>
    )
}

export default ShowTasksPage;