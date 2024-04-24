import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

type Props = {};

const Home = (props: Props) => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home</Text>
      <Button title="Logout" onPress={() => router.navigate("/")} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
