import { View, Text } from "react-native";
import React from "react";
import { useNetInfo } from "@react-native-community/netinfo";

import styles from "./styles";
import AppText from "../AppText/AppText";

export default function OfflineNotice() {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  }
  return null;
}
