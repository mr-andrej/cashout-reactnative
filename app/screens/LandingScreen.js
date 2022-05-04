import { StyleSheet, Text, Image, View, ImageBackground } from "react-native";
import React from "react";

import AppButton from "../components/AppButton/AppButton";
import routes from "../navigation/routes";

export default function LandingScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Why throw out when you can CashOut?</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          color="primary"
          title="login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />

        <AppButton
          color="secondary"
          title="register"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    alignItems: "center",
    top: 70,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
    width: "80%",
    textAlign: "center",
  },
});
