import * as Location from "expo-location";
import { useEffect, useState } from "react";

export default function useLocation() {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();

      if (!granted)
        throw new Error("Location permission not granted. Aborting.");

      let location = await Location.getLastKnownPositionAsync();
      const { latitude, longitude } = location.coords;

      setLocation({ latitude, longitude });

      return { latitude, longitude };
    } catch (e) {
      console.log("Failed to get position. (", e, ")");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
}
