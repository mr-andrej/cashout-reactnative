import { View, Image, Text } from "react-native";
import React from "react";
import styles from "./styles";
import AppText from "../AppText/AppText";

export default function Card({ title, subtitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={image} />
      <View style={styles.detailsContainer}>
        <AppText numberOfLines={1} style={styles.title}>
          {title}
        </AppText>
        <AppText numberOfLines={2} style={styles.subtitle}>
          {subtitle}
        </AppText>
      </View>
    </View>
  );
}
