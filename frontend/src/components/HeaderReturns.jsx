import { Appbar } from "react-native-paper"

const HeaderReturns = ({onNavigate}) => {
    return(
        <Appbar.Header className="bg-[#4866d3]">
            <Appbar.BackAction color="white" onPress={onNavigate} />
            <Appbar.Content color="white" title="Volver" titleStyle={{ fontStyle: "italic" }} />
        </Appbar.Header>
    )
}

export default HeaderReturns;