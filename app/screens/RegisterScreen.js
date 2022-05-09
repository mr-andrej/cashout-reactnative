import { StyleSheet, Image, Text } from "react-native";
import LottieView from "lottie-react-native";
import React, { useState } from "react";
import * as Yup from "yup";

import Screen from "../components/Screen/Screen";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
import usersApi from "../api/users";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator/ActivityIndicator";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(2).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

export default function RegisterScreen() {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occured");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
  };

  return (
    <React.Fragment>
      <LottieView
        loop
        autoPlay
        source={require("../assets/animations/landing.json")}
      />
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <Image
          source={require("../assets/text-logo.png")}
          style={styles.logo}
        />
        <Text style={styles.tagline}>alpha v0.1.4</Text>

        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} color="light" />
          <AppFormField
            name="name"
            autoCorrect={false}
            icon="account"
            placeholder="Name"
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
          <SubmitButton title="Register" color="secondary" />
        </AppForm>
      </Screen>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "100%",
    alignContent: "center",
  },
  tagline: {
    fontSize: 15,
    fontWeight: "500",
    color: colors.lightfont,
    textAlign: "center",
    marginBottom: 20,
  },
  logo: {
    width: 166,
    height: 44,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 10,
  },
});
