import { KeyboardAvoidingView, StyleSheet, View, Platform } from "react-native";
import React from "react";
import { Image } from "react-native-expo-image-cache";

import ListItem from "../components/ListItem/ListItem";
import AppText from "../components/AppText/AppText";
import colors from "../config/colors";
import ContactSellerForm from "../components/ContactSellerForm/ContactSellerForm";

export default function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
        uri={listing.images[0].url}
      />

      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/avatar.jpg")}
            title="Kenny"
            subtitle="12 listings"
          ></ListItem>
        </View>
        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
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
