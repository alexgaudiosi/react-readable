import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListCategories from './ListCategories';
import ListPosts from './ListPosts';
import NewPost from './NewPost';
import NewComment from './NewComment';
import { getCategories, getPosts } from '../actions/index';
// import Modal from 'react-modal';
import '../App.css';

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
    const { categories, posts, modal } = this.props;
    mapDispatchToProps();
    return (
      <div className="App">
        <div className="wrapper">
          <ListCategories categories={categories} />
          <ListPosts posts={posts} />
          <NewComment modal={modal} />
          <NewPost categories={categories} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ categories, posts, modal }) {
  return {
    categories: categories,
    posts: posts,
    modal
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: () => dispatch(getCategories()),
    getPosts: () => dispatch(getPosts())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
