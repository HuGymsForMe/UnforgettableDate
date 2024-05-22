import { View, Text } from "react-native";

const TaskComponent = (props) => (
    <View key={props.id} className={`my-2 p-4 rounded-lg border-2 border-slate-500 ${props.done ? 'bg-green-500' : 'bg-red-500'}`}>
        <View className="flex flex-row justify-between">
            <Text className="text-white text-xl font-bold">{props.title}</Text>
        </View>
        <View className="flex flex-row justify-between">
            <Text className="text-white font-semibold">{props.date}</Text>
            <Text className="text-white font-semibold">{props.hour}</Text>
        </View>
    </View>
)

export default TaskComponent;