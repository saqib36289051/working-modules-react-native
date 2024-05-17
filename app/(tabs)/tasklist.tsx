import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import database, { PostsCollection } from "../../db";
import TList from "../../components/TaskList";
import Post from "../../model/Post";

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
    setDBPost({
      title: "",
      body: "",
    });

  }

  function editPost(post: Post) {
    setDBPost({
      title: post.title,
      body: post.body,
      id: post.id,
    });
  }

  async function updateInDB() {
    await database.write(async () => {
      const post = await PostsCollection.find(dbPost.id)
      await post.update((p) => {
        p.title = dbPost.title;
        p.body = dbPost.body;
      })
    })

    setDBPost({
      title: "",
      body: "",
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

      <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 16 }}>
        <Button title="Create Post" onPress={() => createRecordInDB()} />
        <Button title="Update Post" onPress={() => updateInDB()} />
      </View>
      <TList editPost={editPost} />
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
  btn: {
    backgroundColor: "blue",
    color: "white",
    padding: 10,
    borderRadius: 8,
    width: "80%",
    textAlign: "center",
  }
});
