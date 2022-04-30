import React, { useState } from "react";
import { View, Text, TextInput, Switch } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Icon from "./app/components/Icon/Icon";
import Screen from "./app/components/Screen/Screen";
import LandingScreen from "./app/screens/LandingScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText/AppText";
import AppButton from "./app/components/AppButton/AppButton";
import Card from "./app/components/Card/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/screens/MessageScreen";
import ListItem from "./app/components/ListItem/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput/AppTextInput";
import AppPicker from "./app/components/AppPicker/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";

export default function App() {
  return <RegisterScreen />;
}
