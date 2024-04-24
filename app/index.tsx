import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

type Props = {};

const Dashboard = (props: Props) => {
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
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
