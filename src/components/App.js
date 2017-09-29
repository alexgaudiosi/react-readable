import React, { Component } from 'react';
import ListCategories from './ListCategories';
import Post from './Post';
import * as ReadableAPI from './ReadableAPI';
import '../App.css';

class App extends Component {

  state = {
    categories: [],
    posts: [],
    comments: []
  }

  componentDidMount() {
    ReadableAPI.getCategories().then((categories) => {
      this.setState({ categories: categories.categories });
    })

    ReadableAPI.getPosts().then((posts) => {
      this.setState({ posts: posts });
    })
  }

  render() {

    const { categories, posts } = this.state;

    return (
      <div className="App">
        <div className="wrapper">
          { categories.map((category) => (
            <ListCategories
              key={category.name}
              category={category}
            />
          ))}
          <div className="posts">
            { posts.map((post) => (
              <Post
                key={post.id}
                post={post}
              />
            ))}
          </div>
          <button>Add new post</button>
        </div>
      </div>
    );
  }
}

export default App;
