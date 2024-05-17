import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import TaskListItem from "./TaskListItem";
import { withObservables } from "@nozbe/watermelondb/react";
import { Query } from "@nozbe/watermelondb";
import Post from "../model/Post";
import database, { PostsCollection } from "../db";

const TaskList = ({ posts, editPost }: { posts: Post[], editPost: (post: Post) => void }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return <TaskListItem post={item} editPost={editPost} />;
        }}
      />
    </View>
  );
};

const enhance = withObservables([], () => ({
  posts: PostsCollection.query(),
}));

const TList = enhance(TaskList);

export default TList;

const styles = StyleSheet.create({});
