import { StyleSheet, FlatList, View } from "react-native";
import React, { useState } from "react";

import ListItem from "../components/ListItem/ListItem";
import Screen from "../components/Screen/Screen";
import ListItemSeparator from "../components/ListItemSeparator/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction/ListItemDeleteAction";

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

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
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/avatar.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}
