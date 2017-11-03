import * as ReadableAPI from "../utils/ReadableAPI";

export const ADD_POST = "ADD_POST";
export const GET_CATEGORIES = "GET_CATEGORIES";

export function addPost({ title, body, author, category }) {
  return {
    type: ADD_POST,
    title,
    body,
    author,
    category
  };
}

export const receiveCategories = categories => ({
  type: GET_CATEGORIES,
  categories
});

export const getCategories = () => dispatch =>
  ReadableAPI.fetchCategories().then(categories =>
    dispatch(receiveCategories(categories))
  );
