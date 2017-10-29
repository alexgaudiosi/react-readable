const api = "http://localhost:5001";

const headers = {
  'Authorization': 'whatever-you-want'
}

export const fetchCategories = () => {
  console.log('hey')
  // fetch(`${api}/categories`, { headers })
  //   .then(categories => {return categories.json()})
    // .then(data => data);
    return fetch(`${api}/categories`, { headers }).then(res => res.json()).then(data => data.categories)
}

export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data);

export const getComments = (id) =>
  fetch(`${api}/comments/${id}`, { headers })
    .then(res => res.json())
    .then(data => data);
