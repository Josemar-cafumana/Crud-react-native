import { View, Text, FlatList, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import users from "../data/users";
import { Avatar, Button, Icon, ListItem } from "@rneui/themed";
import { useContext } from "react";
import UsersContext from "../context/UserContext";

export default function UserList({ navigation }) {
  const { state, dispatch } = useContext(UsersContext);

  const confirmUserDeletion = (user, reset) => {
    Alert.alert("Excluir Usuário", "Deseja excluir o usuário?", [
      {
        text: "Sim",
        onPress() {
          dispatch({
            type: "deleteUser",
            payload: user,
          });
          reset();
        },
      },
      {
        text: "Não",
      },
    ]);
  };

  const getUserItem = ({ item: user }) => {
    return (
      <ListItem.Swipeable
        key={user.id}
        bottomDivider
        onPress={() => navigation.navigate("UserForm", user)}
        rightContent={(reset) => (
          <Button
            title="Deletar"
            onPress={() => confirmUserDeletion(user, reset)}
            icon={{ name: "delete", color: "white" }}
            buttonStyle={{ minHeight: "100%", backgroundColor: "red" }}
          />
        )}
        leftContent={(reset) => (
          <Button
            title="Editar"
            onPress={() => navigation.navigate("UserForm", user)}
            icon={{ name: "edit", color: "white" }}
            buttonStyle={{ minHeight: "100%", backgroundColor: "green" }}
          />
        )}
      >
        <Avatar rounded source={{ uri: user.avatarUrl }} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem.Swipeable>
    );
  };

  return (
    <View>
      <FlatList
        keyExtractor={(user) => user.id.toString()}
        data={state.users}
        renderItem={getUserItem}
      />
    </View>
  );
}
