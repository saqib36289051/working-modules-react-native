import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

type Props = {};

const Tabs = (props: Props) => {
    // hide the header of the Tabs screen
  return (

    <Stack>
      <Stack.Screen name="home" options={{ title: "Home" }} />
      <Stack.Screen name="detail" options={{ title: "Detail" }} />
    </Stack>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
