import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: colors.white,
    height: "100%",
    width: "100%",
    zIndex: 1,
    opacity: 0.8,
  },
});

export default styles;
