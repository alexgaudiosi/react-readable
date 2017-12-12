import React, { Component } from 'react';
import Post from './Post';

class ListPosts extends Component {
  state = {
    commentModalOpen: false
  };

  render() {
    const { posts } = this.props;

    if (!posts) {
      return <div> No posts </div>;
    }

    return (
      <div className="posts">
        {posts.length > 1 &&
          posts.map(
            post => (!post.deleted ? <Post post={post} key={post.id} /> : '')
          )}
      </div>
    );
  }
}

export default ListPosts;
