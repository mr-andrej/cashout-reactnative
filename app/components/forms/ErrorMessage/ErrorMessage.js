import React from "react";

import styles from "./styles";
import AppText from "../../AppText/AppText";

export default function ErrorMessage({ error, visible }) {
  if (!visible || !error) {
    return null;
  }

  return <AppText style={styles.error}>{error}</AppText>;
}
