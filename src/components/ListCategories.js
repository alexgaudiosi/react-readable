import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCategories } from '../actions/index';


class ListCategories extends Component {

  // componentWillMount() {
  //   this.props.getCategoriesThunk(this.props.category);
  //   console.log(this.props);
  // }

  render() {


    console.log(this.props)

    const { category } = this.props;

    return (
      <div className='category'>
        <h5>{ category.name }</h5>
      </div>
    )
  }

}

function mapStateToProps({ state }){
  return {
    category: state.categories
  }
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators({ categories: getCategories }, dispatch )
}

export default connect(mapStateToProps)(ListCategories);
