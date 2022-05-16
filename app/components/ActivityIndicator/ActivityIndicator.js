import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";

import styles from "./styles";

export default function ActivityIndicator({ visible = false, ...otherProps }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        loop
        autoPlay
        source={require("../../assets/animations/loading.json")}
        {...otherProps}
      />
    </View>
  );
}
