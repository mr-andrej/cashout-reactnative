import { View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "react-native-vector-icons";

export default function Icon({
  name,
  size = 40,
  backgroundColor = "black",
  iconColor = "white",
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size / 2} />
    </View>
  );
}
