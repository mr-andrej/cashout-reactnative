import * as Location from "expo-location";
import { useEffect, useState } from "react";

export default function useLocation() {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();

      if (!granted) return;

      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });

      return coords;
    } catch (e) {
      console.log("Something went wrong. Failed to get location. " + e);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
}
