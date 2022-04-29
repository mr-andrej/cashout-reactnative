import { View, Image, Text } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import styles from "./styles";
import AppText from "../AppText/AppText";

export default function ListItem({ title, subtitle, image }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View>
        <AppText style={styles.title}>
          {title} <MaterialIcons name="verified" size={18} color="dodgerblue" />
        </AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}
