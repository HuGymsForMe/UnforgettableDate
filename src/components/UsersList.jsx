import React from "react";
import { Text, FlatList } from "react-native";
import users from "../data/users.js";
import UserItem from "./UserItem.jsx";

const UsersList = () => {
    return (
        <FlatList 
            className="w-full"
            data={users}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: user })  => (
                <UserItem {...user} />
            )}
            >
        </FlatList>
    );
}

export default UsersList;