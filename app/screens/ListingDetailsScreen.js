import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";

import ListItem from "../components/ListItem/ListItem";
import AppText from "../components/AppText/AppText";
import colors from "../config/colors";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/orange-tree.jpeg")}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Orange tree for sale</AppText>
        <AppText style={styles.price}>120$</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/avatar.jpg")}
            title="Kenny"
            subtitle="12 listings"
          ></ListItem>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginVertical: 3,
  },
  price: {
    fontSize: 20,
    color: colors.secondary,
    fontWeight: "bold",
  },
  userContainer: {
    marginVertical: 40,
  },
});
