import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import database from "../../db";
import TList from "../../components/TaskList";

const tasklist = () => {
  const [dbPost, setDBPost] = useState({
    title: "",
    body: "",
  });

  async function createRecordInDB() {
    await database.write(async () => {
      await database.get("posts").create((post) => {
        post.title = dbPost.title || "";
        post.body = dbPost.body || "";
        post.isPinned = true;
      });
    });
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        style={styles.input}
        placeholder="title"
        value={dbPost.title}
        onChangeText={(text) => setDBPost({ ...dbPost, title: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="body"
        value={dbPost.body}
        onChangeText={(text) => setDBPost({ ...dbPost, body: text })}
      />

      <Button title="Create Post" onPress={() => createRecordInDB()} />
      <TList />
    </View>
  );
};

export default tasklist;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "black",
    width: "80%",
    padding: 4,
    borderRadius: 8,
  },
});
