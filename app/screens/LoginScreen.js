import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";

import Screen from "../components/Screen/Screen";
import AppTextInput from "../components/AppTextInput/AppTextInput";
import AppButton from "../components/AppButton/AppButton";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={(newValue) => setEmail(newValue)}
        textContentType="emailAddress"
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        placeholder="Password"
        onChangeText={(newValue) => setPassword(newValue)}
        secureTextEntry
        textContentType="password"
      />
      <AppButton
        title="Login"
        onPress={() => {
          console.log(email, password);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
