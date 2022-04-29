import { StyleSheet } from "react-native";

import colors from "../../config/colors";

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 7,
  },
  subtitle: {
    fontSize: 18,
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default styles;
