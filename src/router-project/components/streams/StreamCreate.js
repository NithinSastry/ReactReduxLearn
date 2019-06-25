import React from 'react';
import {Field, reduxForm} from "redux-form";

const renderInput = ({input}) => {
  return <input {...input} />
}

const StreamCreate = (props) => {
  console.log(props);
  return (
    <form>
      <Field name="Streamtitle" component={renderInput} />
      <Field name="StreamDescription" component={renderInput} />
    </form>
  )
};

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);
