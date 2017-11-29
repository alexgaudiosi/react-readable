import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removePost, votePostChange } from '../actions';

class Post extends Component {
  render() {
    const { post, remove, votePost } = this.props;

    return (
      <div className="post box-shadow">
        <button
          data-id={post.id}
          onClick={() => remove(post)}
          className="post__delete"
        >
          x
        </button>
        <h3>{post.title}</h3>
        <p className="copy">{post.body}</p>
        <p className="copy">{post.category}</p>
        <p className="copy--small">Author: {post.author}</p>
        <div className="post__vote">
          <p className="copy--small">Score: {post.voteScore}</p>
          <button onClick={() => votePost(post, 'downVote')}>-</button>
          <button onClick={() => votePost(post, 'upVote')}>+</button>
        </div>
        <span>{post.deleted}</span>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    remove: post => dispatch(removePost(post)),
    votePost: (post, vote) => dispatch(votePostChange(post, vote))
  };
}

export default connect(null, mapDispatchToProps)(Post);
