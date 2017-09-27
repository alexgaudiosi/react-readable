const api = "http://localhost:5001";

const headers = {
  'Authorization': 'whatever-you-want'
}

export const getAll = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data)
