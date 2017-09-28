import React, { Component } from 'react';

class ListCategories extends Component {

  render() {

    const { category } = this.props;

    return (
      <div className='category'>
        <h2>{ category.name }</h2>
      </div>
    )
  }

}

export default ListCategories;
