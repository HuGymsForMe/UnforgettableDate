import { View, Text } from "react-native";

const TaskComponent = (props) => (
    <View key={props.id}>
        <Text>{props.nombre}</Text>
        <Text>{props.date}</Text>
    </View>
)

export default TaskComponent;