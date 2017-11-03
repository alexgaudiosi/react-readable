import { combineReducers } from "redux";

import { ADD_POST, GET_CATEGORIES, GET_POSTS } from "../actions";

const initialPostState = {
  post: {
    title: null,
    body: null,
    author: null,
    category: null
  }
};

const initialPostsState = {
  posts: []
};

const initialCategoriesState = {
  categories: []
};

function categories(state = initialCategoriesState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      const category = action;
      return category.categories;
    default:
      return state;
  }
}

function posts(state = initialPostsState, action) {
  switch (action.type) {
    case GET_POSTS:
      const listPosts = action;
      return listPosts.posts;
    default:
      return state;
  }
}

export default combineReducers({
  posts,
  categories
});
