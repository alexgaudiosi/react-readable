import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitComment } from '../actions'
import { Field, reduxForm } from 'redux-form'
import Modal from 'react-modal'
import uuid from 'uuid'

const required = value => (value ? undefined : 'Required')
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)

const renderField = ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning }
}) => (
  <div className="new-post__field">
    <div>
      <input {...input} placeholder={placeholder} type={type} />
      {touched &&
        ((error && <span className="new-post__field--error">{error}</span>) ||
          (warning && (
            <span className="new-post__field--error">{warning}</span>
          )))}
    </div>
  </div>
)

function submit(values, dispatch, postId) {
  values.id = uuid.v4()
  values.timestamp = Date.now()
  values.parentId = postId.modal.post.id
  return dispatch(submitComment(values))
}

class NewComment extends Component {
  state = {
    loadingFood: false
  }

  closeCommentsModal = () => {
    this.setState(() => ({
      commentsModalOpen: false
    }))
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    const { pristine, submitting, handleSubmit, modal } = this.props
    const postId = modal.post.id

    return (
      <Modal
        className="modal"
        overlayClassName="overlay"
        isOpen={modal.modalOpen}
        onRequestClose={this.closeCommentsModal}
        contentLabel="Modal"
      >
        <div className="new-comment box-shadow">
          <form
            onSubmit={handleSubmit(submit, postId)}
            className="new-post__form"
          >
            <Field
              name="body"
              type="text"
              placeholder="Body"
              component={renderField}
              validate={[required, maxLength15]}
            />
            <Field
              name="author"
              type="text"
              placeholder="Author"
              component={renderField}
              validate={[required]}
            />
            <button type="submit" disabled={pristine || submitting}>
              Submit
            </button>
          </form>
        </div>
      </Modal>
    )
  }
}

function mapStateToProps({ modal }) {
  return { modal: modal }
}

NewComment = connect(mapStateToProps, null)(NewComment)

export default reduxForm({
  form: 'newComment',
  onSubmit: submitComment
})(NewComment)
