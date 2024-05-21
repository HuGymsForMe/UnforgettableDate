import { Pressable, Text, View } from "react-native";

const ButtonAccess = ({children}) => {
    return(
        <Pressable className="flex my-2 justify-center items-center bg-[#648940] w-[80%] py-2 px-4 rounded-lg border-2 border-slate-500">
            <Text className="text-white font-bold text-lg">{children}</Text>
        </Pressable>
    )
}

export default ButtonAccess;