import React, { Component } from 'react';
import ListCategories from './ListCategories';
import * as ReadableAPI from './ReadableAPI';
import '../App.css';

class App extends Component {

  state = {
    categories: []
  }

  componentDidMount() {
    ReadableAPI.getAll().then((categories) => {
      this.setState({ categories: categories.categories });
    })
  }

  render() {

    const { categories } = this.state;


    console.log(categories)

    return (
      <div className="App">
        { categories.map((category) => (
          <ListCategories
            category={category}
          />
        ))}

      </div>
    );
  }
}

export default App;
