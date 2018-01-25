import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from './Comment'
import { getComments } from '../actions'

class ListComments extends Component {
  componentWillMount() {
    this.props.getComments(this.props.post.id)
  }

  render() {
    const { post, comments } = this.props

    if (!comments) {
      return <div className="comments"> No comments </div>
    }

    return (
      <div className="comments">
        {comments.length > 0 &&
          comments.map(
            comment =>
              !comment.deleted && post.id === comment.parentId ? (
                <Comment comment={comment} key={comment.id} />
              ) : (
                ''
              )
          )}
      </div>
    )
  }
}

function mapStateToProps({ comments }) {
  return {
    comments: comments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getComments: post => dispatch(getComments(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListComments)
