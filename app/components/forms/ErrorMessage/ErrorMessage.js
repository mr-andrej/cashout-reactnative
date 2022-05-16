import React from "react";

import styles from "./styles";
import AppText from "../../AppText/AppText";

export default function ErrorMessage({ error, visible, color }) {
  if (!visible || !error) return null;

  if (color == "light") {
    return <AppText style={styles.lightError}>{error}</AppText>;
  }
  return <AppText style={styles.error}>{error}</AppText>;
}
