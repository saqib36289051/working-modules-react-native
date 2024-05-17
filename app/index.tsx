import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
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
      <Link href={"/home"} asChild>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 24,
            }}
          >
            Home
          </Text>
        </TouchableOpacity>
      </Link>

      <Link href={"/detail"} asChild>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 24,
            }}
          >
            Detail
          </Text>
        </TouchableOpacity>
      </Link>

      <Link href={"/tasklist"} asChild>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 24,
            }}
          >
            Task List (Water melondb)
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "lightgray",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 5,
  },
});
