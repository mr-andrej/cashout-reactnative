import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./styles";
import AppText from "../AppText/AppText";

export default function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
}
