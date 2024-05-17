import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs as Tb } from "expo-router";
import { Feather } from "@expo/vector-icons";


const Tabs = () => {
  // hide the header of the Tabs screen
  // href: detail ? "/detail" : null
  return (
    <Tb>
      <Tb.Screen name="home" options={{
        title: "Home",
        tabBarIcon: ({ focused }) => (
          <Feather name="home" size={24} color={focused ? "black" : "gray"} />
        ),
        tabBarActiveTintColor: "black",
      }} />
      <Tb.Screen name="tasklist" options={{
        title: "Task List",
        tabBarIcon: ({ focused }) => (
          <Feather name="database" size={24} color={focused ? "black" : "gray"} />
        ),
        tabBarActiveTintColor: "black",
      }} />

    </Tb>
  );
};


export default Tabs;

const styles = StyleSheet.create({});
