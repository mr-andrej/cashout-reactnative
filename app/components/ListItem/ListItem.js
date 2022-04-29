import { View, Image, Text, TouchableHighlight } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Swipeable } from "react-native-gesture-handler";

import styles from "./styles";
import AppText from "../AppText/AppText";
import colors from "../../config/colors";

// TODO: Implement isVerified prop in ListItem component and use it to show a verified badge
export default function ListItem({
  title,
  subtitle,
  image,
  onPress,
  renderRightActions,
  isVerified,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          <Image source={image} style={styles.image} />
          <View>
            <AppText style={styles.title}>
              {title}
              <MaterialIcons name="verified" size={18} color="dodgerblue" />
            </AppText>
            <AppText style={styles.subtitle}>{subtitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
