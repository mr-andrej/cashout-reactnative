import { View, Text } from "react-native";
import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../../AppButton/AppButton";

export default function SubmitButton({ title, color = "primary" }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} color={color} />;
}
