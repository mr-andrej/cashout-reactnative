import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../../AppTextInput/AppTextInput";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function AppFormField({ name, width, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <React.Fragment>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </React.Fragment>
  );
}
