import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import {
  ADD_POST,
  GET_CATEGORIES,
  GET_POSTS,
  DELETE_POST,
  VOTE_POST,
  GET_COMMENTS,
  OPEN_COMMENTS_MODAL,
  ADD_COMMENT
} from '../actions';

const initialCategoriesState = {
  categories: []
};

const initialPostsState = {
  posts: [
    {
      comments: []
    }
  ]
};

const initialModalState = {
  modalOpen: false,
  post: {}
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
    case VOTE_POST:
      return state.map(
        p =>
          p.id === action.post.id
            ? { ...p, voteScore: action.post.voteScore }
            : p
      );
    case GET_COMMENTS:
      return state.map(
        post =>
          action.comments.length > 0 && post.id === action.comments[0].parentId
            ? { ...post, comments: action.comments }
            : post
      );
    case ADD_COMMENT:
      return state.map(
        post =>
          post.id === action.comment.parentId
            ? { ...post, comments: post.comments.concat(action.comment) }
            : post
      );
    default:
      return state;
  }
}

function modal(state = initialModalState, action) {
  switch (action.type) {
    case OPEN_COMMENTS_MODAL:
      return { ...state, modalOpen: action.modal, post: action.post };
    default:
      return state;
  }
}

export default combineReducers({
  posts,
  categories,
  modal,
  form: formReducer
});
