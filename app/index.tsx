import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Config from "react-native-config";
import { BASE_URL } from "@env";

type Props = {};

const Dashboard = (props: Props) => {
  console.log("🚀 ~ Dashboard ~ baseUrl:", BASE_URL);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <Link
        style={{
          fontWeight: "400",
          fontSize: 24,
        }}
        href={"/home"}
      >
        Home
      </Link>
      <Link
        style={{
          fontWeight: "400",
          fontSize: 24,
        }}
        href={"/detail"}
      >
        Detail
      </Link>
      <Link
        style={{
          fontWeight: "400",
          fontSize: 24,
        }}
        href={"/tasklist"}
      >
        Watermelon DB Testing
      </Link>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
