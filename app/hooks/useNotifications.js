import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

import expoPushTokensApi from "../api/expoPushTokens";
import navigation from "../navigation/rootNavigation";

export default useNotificatinos = () => {
  useEffect(() => {
    registerForPushNotificationsAsync();

    Notifications.addNotificationResponseReceivedListener((notification) => {
      navigation.navigate("Account");
    });
  }, []);

  // I've implemented this with a lot of try/catch blocks, without them I got a lot of
  // "too many callbacks" errors in the console. I'm not sure if there is a better way to do this.
  const registerForPushNotificationsAsync = async () => {
    try {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();

      let finalStatus = existingStatus;

      if (existingStatus !== "granted") {
        try {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        } catch (e) {
          console.log("Error requesting permissions: " + e);
        }
      }

      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }

      try {
        const token = (await Notifications.getExpoPushTokenAsync()).data;
        expoPushTokensApi.register(token);
      } catch (e) {
        console.log(
          "Failed to get already granted push token for push notification! " + e
        );
      }
    } catch (e) {
      console.log("Something went wrong:" + e);
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
  };
};
