import { View, Text } from "react-native";
import React from "react";

import styles from "./styles";
import Icon from "../Icon/Icon";
import AppText from "../AppText/AppText";

export default function CategoryPickerItem({ onPress, item }) {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}
