import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import Constants from "expo-constants";

export default styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    top: Constants.statusBarHeight,
    height: 50,
    width: "100%",
    position: "absolute",
    zIndex: 1,
  },
  text: {
    color: colors.white,
  },
});
