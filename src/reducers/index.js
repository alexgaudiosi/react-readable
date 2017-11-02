import { combineReducers } from 'redux';

import {
  ADD_POST,
  GET_CATEGORIES,
} from '../actions';

function posts( state = initialPostsState, action ){
  // console.log('action');
  // console.log(action);
  switch( action.type ) {
    case ADD_POST:
      const { post } = action;
      return {

      }
    default:
      return state;
  }
}

const initialPostsState = {
  post: {
    title: null,
    body: null,
    author: null,
    category: null
  }
}

const initialCategoriesState = {
  categories: null
}

function categories( state = initialCategoriesState, action ) {
  console.log('spread');
  // console.log('spread');
  switch( action.type ) {
    case 'GET_CATEGORIES':
      const category = action;
      return category.categories
    default:
      return state
  }
}

export default combineReducers({
  posts,
  categories
});
