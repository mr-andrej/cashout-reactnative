import { StyleSheet, Text, Image, View } from "react-native";
import LottieView from "lottie-react-native";
import React from "react";

import AppButton from "../components/AppButton/AppButton";
import routes from "../navigation/routes";
import colors from "../config/colors";

export default function LandingScreen({ navigation }) {
  return (
    <>
      <LottieView
        loop
        autoPlay
        source={require("../assets/animations/landing.json")}
      />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/text-logo.png")}
        />
        <Text style={styles.tagline}>alpha v0.1.4</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          color="tertiary"
          title="login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />

        <AppButton
          color="secondary"
          title="register"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </>
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
    marginBottom: 50,
    width: "100%",
    position: "absolute",
    zIndex: 1,
    bottom: 0,
  },
  logo: {
    width: 166,
    height: 44,
    zIndex: 1,
    top: 120,
  },
  tagline: {
    fontSize: 15,
    top: 130,
    fontWeight: "500",
    color: colors.lightfont,
  },
  logoContainer: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
