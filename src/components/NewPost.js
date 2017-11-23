import React, { Component } from "react";
import { submitPost } from "../actions";
import { Field, reduxForm } from "redux-form";
import uuid from "uuid";

const required = value => (value ? undefined : "Required");
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength5 = maxLength(5);

const renderField = ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{placeholder}</label>
    <div>
      <input {...input} placeholder={placeholder} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

function submit(values, dispatch) {
  values.id = uuid.v4();
  values.timestamp = Date.now();
  return dispatch(submitPost(values));
}

class NewPost extends Component {
  handleSubmit(e, values) {
    e.preventDefault();
  }

  render() {
    const { categories, pristine, submitting, handleSubmit } = this.props;
    return (
      <div className="new-post">
        <form onSubmit={handleSubmit(submit)}>
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

// function mapStateToProps({}) {}

// function mapDispatchToProps(dispatch) {
//   return {
//     submitPost: data => dispatch(addPost(data))
//   };
// }
// export default connect()(NewPost);

// export default connect(mapDispatchToProps)(NewPost);
