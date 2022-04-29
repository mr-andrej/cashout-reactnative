import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  appButton: {
    width: "100%",
    backgroundColor: colors.primary,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    marginVertical: 10,
  },
  appButtonText: {
    color: colors.white,
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
