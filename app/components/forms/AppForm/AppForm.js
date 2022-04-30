import { View, Text } from "react-native";
import React from "react";
import { Formik } from "formik";

import styles from "./styles";

export default function AppForm({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) {
  return (
    <Formik
      initialValues={{ initialValues }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <React.Fragment>{children}</React.Fragment>}
    </Formik>
  );
}
