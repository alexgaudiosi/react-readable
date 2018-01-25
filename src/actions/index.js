import * as ReadableAPI from '../utils/ReadableAPI'

export const ADD_POST = 'ADD_POST',
  GET_CATEGORIES = 'GET_CATEGORIES',
  GET_POSTS = 'GET_POSTS',
  GET_COMMENTS = 'GET_COMMENTS',
  DELETE_POST = 'DELETE_POST',
  VOTE_POST = 'VOTE_POST',
  ADD_COMMENT = 'ADD_COMMENT',
  OPEN_COMMENTS_MODAL = 'OPEN_COMMENTS_MODAL',
  DELETE_COMMENT = 'DELETE_COMMENT'

export const submitPost = values => dispatch => {
  ReadableAPI.createPost(values).then(post => dispatch(addPost(post)))
}

export const addPost = post => {
  return {
    type: ADD_POST,
    post
  }
}

export const getCategories = () => dispatch =>
  ReadableAPI.fetchCategories().then(categories =>
    dispatch(receiveCategories(categories))
  )

export const receiveCategories = categories => ({
  type: GET_CATEGORIES,
  categories
})

export const getPosts = () => dispatch =>
  ReadableAPI.fetchPosts().then(categories =>
    dispatch(receivePosts(categories))
  )

export const receivePosts = posts => ({
  type: GET_POSTS,
  posts
})

export const openCommentsModal = (post, modal) =>
  openingCommentsModal(post, modal)

export const openingCommentsModal = (post, modal) => ({
  type: OPEN_COMMENTS_MODAL,
  post,
  modal
})

export const submitComment = values => dispatch => {
  ReadableAPI.createComment(values).then(comment =>
    dispatch(addComment(comment))
  )
}

export const addComment = comment => ({
  type: ADD_COMMENT,
  comment
})

export const getComments = post => dispatch =>
  ReadableAPI.getComments(post).then(comments => {
    dispatch(receiveComments(comments))
  })

export const receiveComments = comments => ({
  type: GET_COMMENTS,
  comments
})

export const removeComment = comment => dispatch => {
  console.log('remove comment')
  ReadableAPI.deleteComment(comment).then(comment =>
    dispatch(deleteComment(comment))
  )
}

export const deleteComment = comment => ({
  type: DELETE_COMMENT,
  comment
})

export const removePost = post => dispatch => {
  ReadableAPI.deletePost(post).then(post => dispatch(deletePost(post)))
}

export const deletePost = post => ({
  type: DELETE_POST,
  post
})

export const votePostChange = (post, vote) => dispatch => {
  ReadableAPI.votePost(post, vote).then(post => dispatch(votePost(post)))
}

export const votePost = (post, vote) => ({
  type: VOTE_POST,
  post,
  vote
})
