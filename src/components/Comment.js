import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeComment } from '../actions';

class Comment extends Component {
  render() {
    const { comment, removeComment } = this.props;

    return (
      <div className="comment box-shadow">
        <button
          data-id={comment.id}
          onClick={() => removeComment(comment)}
          className="comment__delete"
        >
          x
        </button>
        <h3>{comment.title}</h3>
        <p className="copy">{comment.body}</p>
        <p className="copy">{comment.category}</p>
        <p className="copy--small">Author: {comment.author}</p>
        <div className="comment__vote">
          <p className="copy--small">Score: {comment.voteScore}</p>
        </div>
        <span>{comment.deleted}</span>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeComment: comment => dispatch(removeComment(comment))
  };
}

export default connect(null, mapDispatchToProps)(Comment);
