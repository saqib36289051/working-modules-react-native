// model/Post.js
import { Model } from "@nozbe/watermelondb";
import { text, field, writer } from "@nozbe/watermelondb/decorators";

export default class Post extends Model {
  static table = "posts";

  @text("title") title: string;
  @text("body") body: string;
  @field("is_pinned") isPinned: boolean;

  @writer async deletePost(){
    await this.markAsDeleted();
  }
}
