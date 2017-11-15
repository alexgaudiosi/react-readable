const api = "http://localhost:5001";

const headers = {
  Authorization: "whatever-you-want"
};

export const create = values => {
  console.log("create");
  fetch(`${api}/posts`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(values)
  }).then(res => res.json());
};

export const fetchCategories = () => {
  return fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);
};

export const fetchPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data);

export const getComments = id =>
  fetch(`${api}/comments/${id}`, { headers })
    .then(res => res.json())
    .then(data => data);
