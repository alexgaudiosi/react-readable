import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comment extends Component {
  render() {
    const { comment } = this.props;

    return (
      <div className="comment box-shadow">
        <button
          data-id={comment.id}
          //onClick={() => remove(comment)}
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
  return {};
}

export default connect(null, mapDispatchToProps)(Comment);
