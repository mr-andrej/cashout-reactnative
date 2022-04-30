import { View, SafeAreaView } from "react-native";
import React from "react";

import styles from "./styles";

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.screenInterior, style]}>{children}</View>
    </SafeAreaView>
  );
}
