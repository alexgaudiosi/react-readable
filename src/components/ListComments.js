import React from 'react';
import Comment from './Comment';

export default function ListComments({ comments }) {
  console.log('check');
  if (!comments) {
    return <div> No comments </div>;
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
