import * as ReadableAPI from "../utils/ReadableAPI";

export const ADD_POST = "ADD_POST";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_POSTS = "GET_POSTS";

export function addPost({ title, body, author, category }) {
  return {
    type: ADD_POST,
    title,
    body,
    author,
    category
  };
}

export const submitPost = values => dispatch => {
  ReadableAPI.create(values).then(post =>
    dispatch(console.log("adding"), addPost(post))
  );
};

export const receiveCategories = categories => ({
  type: GET_CATEGORIES,
  categories
});

export const getCategories = () => dispatch =>
  ReadableAPI.fetchCategories().then(categories =>
    dispatch(receiveCategories(categories))
  );

export const receivePosts = posts => ({
  type: GET_POSTS,
  posts
});

export const getPosts = () => dispatch =>
  ReadableAPI.fetchPosts(console.log("hey")).then(categories =>
    dispatch(receivePosts(categories))
  );
