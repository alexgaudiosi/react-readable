import React, { Component } from "react";
import { connect } from "react-redux";
import { submitPost } from "../actions";
import { Field, reduxForm } from "redux-form";
import uuid from "uuid";

const required = value => (value ? undefined : "Required");
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength5 = maxLength(5);

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

function submit(values, dispatch) {
  values.id = uuid.v4();
  values.timestamp = Date.now();
  console.log(values);
  return dispatch(submitPost(values));
}

// const submit = values => {
//   //login: ()=> login(values.email)
//   // this.onSubmit(values);
//   let x = "cake";
//   // return dispatch(submitPost(values));
//   console.log(submitPost);
//   // submitPost(values);
//   console.log("submitting form", values);
// };

class NewPost extends Component {
  // id - UUID should be fine, but any unique id will work
  // timestamp - timestamp in whatever format you like, you can use Date.now() if you like
  // title - String
  // body - String
  // author - String
  // category: A

  // handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(e);
  // }

  handleSubmit(e, values) {
    e.preventDefault();
    console.log("submit");
    console.log(values);
    // submitPost(values);
  }

  render() {
    const { categories, pristine, submitting, handleSubmit } = this.props;
    return (
      <div>
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
