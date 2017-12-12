import React from 'react';
import Comment from './Comment';

export default function ListComments({ comments }) {
  if (!comments) {
    return <div className="comments"> No comments </div>;
  }

  return (
    <div className="comments">
      {comments.length > 1 &&
        comments.map(
          comment =>
            !comment.deleted ? (
              <Comment comment={comment} key={comment.id} />
            ) : (
              ''
            )
        )}
    </div>
  );
}
