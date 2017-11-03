import React, { Component } from "react";
import { connect } from "react-redux";
import ListCategories from "./ListCategories";
import { getCategories } from "../actions/index";
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
  }

  render() {
    const { categories } = this.props;
    // console.log(this.props.findStuff);
    mapDispatchToProps();
    return (
      <div className="App">
        <div className="wrapper">
          <div className="posts">
            {/* { this.props.categories.map((category) => (
              category.title
            ))} */}
          </div>
          <ListCategories categories={categories} />
          <button onClick={() => {}}>Add new post</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ categories }) {
  return {
    categories: categories
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
    getCategories: () => dispatch(getCategories())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
