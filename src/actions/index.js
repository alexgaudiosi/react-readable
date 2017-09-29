export const ADD_POST = 'ADD_POST';

export function addPost({title, body, author, category}) {
  return {
    type: ADD_POST,
    title,
    body,
    author,
    category
  }
}
