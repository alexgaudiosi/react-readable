import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListComments from './ListComments';
import { removePost, votePostChange, getComments } from '../actions';

class Post extends Component {
  handleClick = post => {
    console.log('click');
    getComments(post);
  };
  render() {
    const { post, remove, votePost, comments } = this.props;

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
        <button onClick={() => this.props.getComments(post)}>comments</button>
        <ListComments />
        <span>{post.deleted}</span>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getComments: post => dispatch(getComments(post)),
    remove: post => dispatch(removePost(post)),
    votePost: (post, vote) => dispatch(votePostChange(post, vote))
  };
}

export default connect(null, mapDispatchToProps)(Post);
