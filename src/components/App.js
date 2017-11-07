import React, { Component } from "react";
import { connect } from "react-redux";
import ListCategories from "./ListCategories";
import ListPosts from "./ListPosts";
import NewPost from "./NewPost";
import { getCategories, getPosts } from "../actions/index";
// import Post from './Post';
// import Modal from 'react-modal';
// import { bindActionCreators } from 'redux';
// import ReduxThunk from 'redux-thunk';
import "../App.css";

class App extends Component {
  // openPostModal = ({ title, body, author }) => {
  //   this.setState(() => ({
  //     postModalOpen: true,
  //     title,
  //     body,
  //     author
  //   }))
  // }
  // closeCloseModal = () => {
  //   this.setState(() => ({
  //     postModalOpen: false,
  //     title: null,
  //     body: null,
  //     author: null
  //   }))
  // }

  componentDidMount() {
    this.props.getCategories();
    this.props.getPosts();
  }

  render() {
    const { categories, posts } = this.props;
    mapDispatchToProps();
    return (
      <div className="App">
        <div className="wrapper">
          <div className="posts" />
          <ListCategories categories={categories} />
          <ListPosts posts={posts} />
          <NewPost categories={categories} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ categories, posts }) {
  return {
    categories: categories,
    posts: posts
  };
}

// function mapDispatchToProps( dispatch ){
//   return {
//     // submitPost: (data) => dispatch(addPost(data))
//     // categories: (data) => dispatch(getCategories(data))

//   }
// }

function mapDispatchToProps(dispatch) {
  return {
    getCategories: () => dispatch(getCategories()),
    getPosts: () => dispatch(getPosts())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
