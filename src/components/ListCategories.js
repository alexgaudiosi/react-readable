import React, { Component } from 'react';

class ListCategories extends Component {

  render() {

    const { category } = this.props;

    return (
      <div className='category'>
        <h5>{ category.name }</h5>
      </div>
    )
  }

}

export default ListCategories;
