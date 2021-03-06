const api = 'http://localhost:5001'

const headers = {
  Authorization: 'whatever-you-want'
}

export const createPost = values => {
  return fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
    .then(res => res.json())
    .then(data => data)
}

export const fetchCategories = () => {
  return fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)
}

export const fetchPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const createComment = values => {
  return fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
    .then(res => res.json())
    .then(data => data)
}

export const getComments = post => {
  return fetch(`${api}/posts/${post}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)
}

export const deleteComment = comment => {
  return fetch(`${api}/comments/${comment.id}`, {
    method: 'DELETE',
    headers
  })
    .then(res => res.json())
    .then(data => data)
}

export const deletePost = post => {
  return fetch(`${api}/posts/${post.id}`, {
    method: 'DELETE',
    headers
  })
    .then(res => res.json())
    .then(data => data)
}

export const votePost = (post, vote) => {
  return fetch(`${api}/posts/${post.id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option: vote })
  })
    .then(res => res.json())
    .then(data => data)
}
