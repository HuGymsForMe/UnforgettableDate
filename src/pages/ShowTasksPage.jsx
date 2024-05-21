import { Text, FlatList, View } from "react-native";

import { tasks } from "../data/tasks.js";
import TaskComponent from "../components/TaskComponent";

const ShowTasksPage = () => {
    return(
        <View className="bg-[#4c70b9] flex justify-center items-center min-h-full">
            <FlatList 
            className="w-full"
            data={tasks}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: task })  => (
                <TaskComponent {...task} />
            )}
            >
            </FlatList>
        </View>
    )
}

export default ShowTasksPage;