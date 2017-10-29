import * as ReadableAPI from '../utils/ReadableAPI';

export const ADD_POST = 'ADD_POST';
export const GET_CATEGORIES = 'GET_CATEGORIES';

export function addPost({title, body, author, category}) {
  return {
    type: ADD_POST,
    title,
    body,
    author,
    category
  }
}

export const receiveCategories = categories => ({
    type: GET_CATEGORIES,
    categories
})


export const getCategories = () => dispatch => (
  // console.log(ReadableAPI.fetchCategories)
  ReadableAPI
    .fetchCategories()
    // .then(console.log(categories => categories) )
    .then(categories => dispatch(receiveCategories(categories), console.log('dispatch')))
    // .catch(function(err) {
    //   console.log(err);
    // })
)

export function startFetching() {
  return {
    type: 'START_FETCHING'
  }
}
export function stopFetching() {
  return {
    type: 'STOP_FETCHING'
  }
}
