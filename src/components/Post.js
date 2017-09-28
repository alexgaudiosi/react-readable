import React, { Component } from 'react';

class Book extends Component {

  render() {

    const { post } = this.props;

    return (
      <div className="post">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <small><p>Author: {post.author}</p></small>
      </div>
    )
  }

}

export default Book;
