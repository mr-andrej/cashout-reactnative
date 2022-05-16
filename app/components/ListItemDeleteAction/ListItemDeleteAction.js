import { View, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";
import colors from "../../config/colors";

export default function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="delete" size={35} color={colors.white} />
      </View>
    </TouchableWithoutFeedback>
  );
}
