import { View, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { Image } from "react-native-expo-image-cache";

import styles from "./styles";
import AppText from "../AppText/AppText";

export default function Card({
  title,
  subtitle,
  imageUrl,
  onPress,
  thumbnailUrl,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.cardImage}
          preview={{ uri: thumbnailUrl }}
          tint="light"
          uri={imageUrl}
        />
        <View style={styles.detailsContainer}>
          <AppText numberOfLines={1} style={styles.title}>
            {title}
          </AppText>
          <AppText numberOfLines={2} style={styles.subtitle}>
            {subtitle}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
