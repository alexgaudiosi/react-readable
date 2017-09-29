const api = "http://localhost:5001";

const headers = {
  'Authorization': 'whatever-you-want'
}

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data);

export const getPosts = () =>
fetch(`${api}/posts`, { headers })
  .then(res => res.json())
  .then(data => data);

export const getComments = (id) =>
  fetch(`${api}/comments/${id}`, { headers })
    .then(res => res.json())
    .then(data => data);
