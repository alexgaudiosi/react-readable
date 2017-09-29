import { combineReducers } from 'redux';

import {
  ADD_POST
} from '../actions';

function post( state={}, action ){
  switch( action.type ) {
    case ADD_POST:
      const { post } = action;
      return {

      }
    default:
      return state;
  }
}

export default combineReducers({
  posts
});
