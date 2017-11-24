import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { ADD_POST, GET_CATEGORIES, GET_POSTS, DELETE_POST } from "../actions";

const initialCategoriesState = {
  categories: []
};

const initialPostsState = {
  posts: []
};

function categories(state = initialCategoriesState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
}

function posts(state = initialPostsState, action) {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.post];
    case GET_POSTS:
      return [...action.posts];
    case DELETE_POST:
      return state.map(
        p =>
          p.id === action.post.id ? { ...p, deleted: action.post.deleted } : p
      );
    default:
      return state;
  }
}

export default combineReducers({
  posts,
  categories,
  form: formReducer
});
