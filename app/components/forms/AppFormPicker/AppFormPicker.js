import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../../AppPicker/AppPicker";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function AppFormPicker({ items, name, placeholder }) {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  return (
    <React.Fragment>
      <AppPicker
        items={items}
        name={name}
        placeholder={placeholder}
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </React.Fragment>
  );
}
