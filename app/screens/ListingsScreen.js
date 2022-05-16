import { FlatList, StyleSheet, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";

import routes from "../navigation/routes";
import Screen from "../components/Screen/Screen";
import listingsApi from "../api/listings";
import Card from "../components/Card/Card";
import colors from "../config/colors";
import AppText from "../components/AppText/AppText";
import AppButton from "../components/AppButton/AppButton";
import ActivityIndicator from "../components/ActivityIndicator/ActivityIndicator";
import useApi from "../hooks/useApi";

export default function ListingsScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
    setRefreshing(false);
  }, []);

  return (
    <React.Fragment>
      <ActivityIndicator visible={getListingsApi.loading || refreshing} />

      <Screen style={styles.screen}>
        {getListingsApi.error && (
          <>
            <AppText style={styles.error}>
              Couldn't retrive the listings
            </AppText>
            <AppButton title="Retry" onPress={getListingsApi.request} />
          </>
        )}
        <FlatList
          data={getListingsApi.data.reverse()}
          keyExtractor={(listing) => listing.id.toString()}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => getListingsApi.request()}
            />
          }
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subtitle={`$${item.price}`}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
      </Screen>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
  error: {
    color: colors.danger,
    textAlign: "center",
  },
});
