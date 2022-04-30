import { StyleSheet, FlatList, View } from "react-native";
import React from "react";

import ListItem from "../components/ListItem/ListItem";
import Screen from "../components/Screen/Screen";
import ListItemSeparator from "../components/ListItemSeparator/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction/ListItemDeleteAction";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/avatar.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/avatar.jpg"),
  },
];

export default function MessageScreen() {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log("Touched", item)}
            renderRightActions={ListItemDeleteAction}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}