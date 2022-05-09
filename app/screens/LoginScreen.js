import { StyleSheet, Image, Text } from "react-native";
import React, { useState } from "react";
import LottieView from "lottie-react-native";
import * as Yup from "yup";

import Screen from "../components/Screen/Screen";
import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/forms";
import authApi from "../api/auth";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

export default function LoginScreen() {
  const { logIn } = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);

    if (!result.ok) {
      return setLoginFailed(true);
    }

    setLoginFailed(false);
    logIn(result.data);
  };

  return (
    <>
      <LottieView
        loop
        autoPlay
        source={require("../assets/animations/landing.json")}
      />
      <Screen style={styles.container}>
        <Image
          source={require("../assets/text-logo.png")}
          style={styles.logo}
        />
        <Text style={styles.tagline}>alpha v0.1.4</Text>

        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage
            error="Invalid email or password"
            visible={loginFailed}
            style={styles.errorMessage}
            color="light"
          />
          <AppFormField
            name="email"
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            placeholder="Email"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <AppFormField
            name="password"
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Login" />
        </AppForm>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  tagline: {
    fontSize: 15,
    fontWeight: "500",
    color: colors.lightfont,
    textAlign: "center",
    marginBottom: 20,
  },
  errorMessage: {
    color: colors.lightfont,
  },
  container: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 166,
    height: 44,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 10,
  },
});
