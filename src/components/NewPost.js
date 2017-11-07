import React, { Component } from "react";
import uuid from "uuid";

class NewPost extends Component {
  // id - UUID should be fine, but any unique id will work
  // timestamp - timestamp in whatever format you like, you can use Date.now() if you like
  // title - String
  // body - String
  // author - String
  // category: A
  render() {
    const { categories } = this.props;
    return (
      <div>
        <input className="new-post-form__fields" />
        <input className="new-post-form__fields" />
        <input className="new-post-form__fields" />
        <select className="new-post-form__fields">
          {categories.length &&
            categories.map(category => (
              <option key={uuid.v4()}>{category.name}</option>
            ))}
        </select>
      </div>
    );
  }
}

export default NewPost;
