import { View } from "react-native"
import UsersList from "../components/UsersList";

const Main = () => {
    return(
        <View className="bg-[#497583] flex items-center pt-20 w-full">
            <UsersList />
        </View>
    )
}

export default Main;