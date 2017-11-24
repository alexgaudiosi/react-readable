import * as ReadableAPI from "../utils/ReadableAPI";

export const ADD_POST = "ADD_POST";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_POSTS = "GET_POSTS";
export const DELETE_POST = "DELETE_POST";

export const submitPost = values => dispatch => {
  ReadableAPI.create(values).then(post => dispatch(addPost(post)));
};

export const addPost = post => {
  return {
    type: ADD_POST,
    post
  };
};

export const getCategories = () => dispatch =>
  ReadableAPI.fetchCategories().then(categories =>
    dispatch(receiveCategories(categories))
  );

export const receiveCategories = categories => ({
  type: GET_CATEGORIES,
  categories
});

export const getPosts = () => dispatch =>
  ReadableAPI.fetchPosts().then(categories =>
    dispatch(receivePosts(categories))
  );

export const receivePosts = posts => ({
  type: GET_POSTS,
  posts
});

export const removePost = post => dispatch => {
  ReadableAPI.deletePost(post).then(post => dispatch(deletePost(post)));
};

export const deletePost = post => ({
  type: DELETE_POST,
  post
});
