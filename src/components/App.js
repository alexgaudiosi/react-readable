import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../actions';
import ListCategories from './ListCategories';
import Post from './Post';
import Modal from 'react-modal';
import { bindActionCreators } from 'redux';
import ReduxThunk from 'redux-thunk';
import '../App.css';

class App extends Component {

  state = {
    postModalOpen: false,
    categories: [],
    comments: [],
    posts: null
  }

  componentDidMount() {
    // console.log(actions)
    // actions.fetchCategories()
    // console.log('fetch');
    // fetchCategories()
  }


  // componentDidMount() {
    // getCategoriesThunk(this.props.categories);

    // componentDidMount() {
    //   this.props.getCategoriesThunk(this.props.categories)
    //   console.log(this.props);
    // }
  // }


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

  render() {

    console.log(this.props)
    const { findStuff } = this.props;
    console.log(this.props.findStuff)
    mapDispatchToProps()
    return (
      <div className="App">
        <div className="wrapper">

          <div className="posts">
            {/* { this.props.categories.map((category) => (
              category.title
            ))} */}
          </div>
          <button onClick={() => {findStuff()}}>Add new post</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ categories }){
  return {
    categories: categories
  }
}

// function mapDispatchToProps( dispatch ){
//   return {
//     // submitPost: (data) => dispatch(addPost(data))
//     // categories: (data) => dispatch(getCategories(data))

//   }
// }

function mapDispatchToProps( dispatch ) {
  return {
    findStuff: () => dispatch(getCategories(), console.log('find'))

  }
  // return bindActionCreators({ fetchCategories: fetchCategories }, dispatch )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
