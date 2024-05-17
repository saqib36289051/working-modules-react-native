import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { withObservables } from "@nozbe/watermelondb/react";
import Post from "../model/Post";

const TaskListItem = ({ post, editPost }: { post: Post, editPost: (post: Post) => void }) => {
  return (
    <View
      style={styles.cardContainer}
    >
      <View>
        <Text style={styles.text}>Title: {post.title}</Text>
        <Text style={styles.text}>Body: {post.body}</Text>
      </View>

      <View style={styles.btnContainer}>
        <Button title="Edit"
          onPress={async () => editPost(post)}
        />
        <Button title="Delete"
          onPress={async () => await post.deletePost()}
        />
      </View>
    </View>
  );
};

const enhance = withObservables(["post"], ({ post }) => ({
  post,
}));

export default enhance(TaskListItem)

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "black",
    fontWeight: "400",
  },
  cardContainer: {
    display: "flex",
    width: Dimensions.get("window").width - 20,
    gap: 10,
    margin: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // alignItems: "center",
    // justifyContent: "space-between",
  },
  btnContainer: {
    display: "flex",
    // width: Dimensions.get("window").width / 2,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "flex-end",
  }
});
