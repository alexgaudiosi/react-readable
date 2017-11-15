import React, { Component } from "react";

class Post extends Component {
  render() {
    const { post } = this.props;

    return (
      <div className="post">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <p>{post.category}</p>
        <small>
          <p>Author: {post.author}</p>
          <p>Score: {post.voteScore}</p>
        </small>
      </div>
    );
  }
}

export default Post;
