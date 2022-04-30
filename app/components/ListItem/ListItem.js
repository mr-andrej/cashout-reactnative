import { View, Image, TouchableHighlight } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import styles from "./styles";
import AppText from "../AppText/AppText";
import colors from "../../config/colors";

// TODO: Implement isVerified prop in ListItem component and use it to show a verified badge
export default function ListItem({
  title,
  subtitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  isVerified = false, // Seems a bit odd, but it's how it'll remain for now
  showChevron = true,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <React.Fragment>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image source={image} style={styles.image} />}
            <View style={styles.detailsContainer}>
              <AppText numberofLines={1} style={styles.title}>
                {title}{" "}
                {isVerified && (
                  <MaterialIcons name="verified" size={18} color="dodgerblue" />
                )}
              </AppText>
              {subtitle && (
                <AppText numberofLines={2} style={styles.subtitle}>
                  {subtitle}
                </AppText>
              )}
            </View>
            <View style={styles.iconContainer}>
              <MaterialIcons
                name="chevron-right"
                size={25}
                style={styles.icon}
              />
            </View>
          </View>
        </React.Fragment>
      </TouchableHighlight>
    </Swipeable>
  );
}
