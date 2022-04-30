import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem/CategoryPickerItem";
import Screen from "../components/Screen/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().min(16).label("Description"),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "floor-lamp" },
  {
    label: "Clothing",
    value: 2,
    backgroundColor: "orange",
    icon: "tshirt-crew",
  },
  {
    label: "Electronics",
    value: 3,
    backgroundColor: "blue",
    icon: "cellphone-link",
  },
  {
    label: "Toys",
    value: 4,
    backgroundColor: "green",
    icon: "gamepad-variant",
  },
  {
    label: "Games",
    value: 5,
    backgroundColor: "purple",
    icon: "cards",
  },
  {
    label: "Sports",
    value: 6,
    backgroundColor: "pink",
    icon: "bike",
  },
  {
    label: "Books",
    value: 7,
    backgroundColor: "cyan",
    icon: "book-open-page-variant",
  },
  {
    label: "Movies & Music",
    value: 8,
    backgroundColor: "teal",
    icon: "music-note",
  },
  {
    label: "Other",
    value: 9,
    backgroundColor: "gray",
    icon: "card-text-outline",
  },
];

export default function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          name="price"
          placeholder="Price"
          maxLength={8} // max price is $10000.00 - 8 digits
          width={100}
        />
        <Picker
          numberOfColumns={3}
          name="category"
          placeholder="Category"
          PickerItemComponent={CategoryPickerItem}
          items={categories}
          width="80%"
        />
        <FormField
          maxLength={255}
          multiline
          numberOfLines={3} // Only works on Android
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
