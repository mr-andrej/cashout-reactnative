import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../../AppTextInput/AppTextInput";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import colors from "../../../config/colors";

export default function AppFormField({
  name,
  width,
  errorColor = "danger",
  ...otherProps
}) {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage
        error={errors[name]}
        visible={touched[name]}
        color={colors[errorColor]}
      />
    </>
  );
}
