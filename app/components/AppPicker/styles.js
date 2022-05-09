import { StyleSheet } from "react-native";

import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mediumlight,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  iconContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    flex: 1,
  },
  placeholder: {
    color: colors.medium,
  },
});

export default styles;
