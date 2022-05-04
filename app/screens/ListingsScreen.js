import { View, FlatList, StyleSheet } from "react-native";
import React from "react";

import routes from "../navigation/routes";
import Screen from "../components/Screen/Screen";
import Card from "../components/Card/Card";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Fruit tree for sale",
    price: 120,
    image: require("../assets/orange-tree.jpeg"),
  },
  {
    id: 2,
    title: "Orange tree on sale",
    price: 340,
    image: require("../assets/orange-tree.jpeg"),
  },
];

export default function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={`$${item.price}`}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
