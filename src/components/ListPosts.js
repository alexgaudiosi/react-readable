import React from "react";
import Post from "./Post";

export default function ListPosts({ posts }) {
  if (!posts) {
    return <div> no data </div>;
  }

  return (
    <div className="posts">
      {posts.length > 1 &&
        posts.map(post => <Post post={post} key={post.id} />)}
    </div>
  );
}
