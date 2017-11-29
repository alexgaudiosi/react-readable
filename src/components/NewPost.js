import React, { Component } from "react";
import { submitPost } from "../actions";
import { Field, reduxForm } from "redux-form";
import uuid from "uuid";

const required = value => (value ? undefined : "Required");
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength5 = maxLength(15);

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
);

function submit(values, dispatch) {
  values.id = uuid.v4();
  values.timestamp = Date.now();
  return dispatch(submitPost(values));
}

class NewPost extends Component {
  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { categories, pristine, submitting, handleSubmit } = this.props;
    return (
      <div className="new-post box-shadow">
        <form onSubmit={handleSubmit(submit)} className="new-post__form">
          <Field
            name="title"
            type="text"
            placeholder="Title"
            component={renderField}
            validate={[required, maxLength5]}
          />
          <Field
            name="body"
            type="text"
            placeholder="Body"
            component={renderField}
            validate={[required]}
          />
          <Field
            name="author"
            type="text"
            placeholder="Author"
            component={renderField}
            validate={[required]}
          />
          <Field name="category" component="select" validate={[required]}>
            <option />
            {categories.length &&
              categories.map(category => (
                <option key={uuid.v4()}>{category.name}</option>
              ))}
          </Field>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "newPost",
  onSubmit: submitPost
})(NewPost);
