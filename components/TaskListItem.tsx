import {
  Button,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { withObservables } from "@nozbe/watermelondb/react";
import Post from "../model/Post";

const TaskListItem = ({ post }: { post: Post }) => {
  return (
    <View
      style={{
        display: "flex",
        width: Dimensions.get("window").width - 20,
        flexDirection: "row",
        gap: 10,
        margin: 10,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Text>{post.title}</Text>
        <Text> - </Text>
        <Text>{post.body}</Text>
      </View>

      <Button title="Delete"
      onPress={async() => await post.deletePost()}
      />
    </View>
  );
};

export default TaskListItem;

const styles = StyleSheet.create({});
