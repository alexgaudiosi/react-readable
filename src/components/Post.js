import React, { Component } from "react";

class Post extends Component {
  render() {
    const { post } = this.props;

    return (
      <div className="post box-shadow">
        <h3>{post.title}</h3>
        <p className="copy">{post.body}</p>
        <p className="copy">{post.category}</p>
        <p className="copy--small">Author: {post.author}</p>
        <p className="copy--small">Score: {post.voteScore}</p>
      </div>
    );
  }
}

export default Post;
