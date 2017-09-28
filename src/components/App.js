import React, { Component } from 'react';
import ListCategories from './ListCategories';
import Post from './Post';
import * as ReadableAPI from './ReadableAPI';
import '../App.css';

class App extends Component {

  state = {
    categories: [],
    posts: []
  }

  componentDidMount() {
    ReadableAPI.getAll().then((categories) => {
      this.setState({ categories: categories.categories });
    })

    ReadableAPI.getPosts().then((posts) => {
      this.setState({ posts: posts });
    })
  }

  render() {
    const { categories, posts } = this.state;


    console.log(categories)
    console.log(posts)

    return (
      <div className="App">
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

      </div>
    );
  }
}

export default App;
