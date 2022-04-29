import { Text, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./styles";
import colors from "../../config/colors";

export default function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.appButton, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}
