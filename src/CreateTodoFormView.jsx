import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';

const CreateTodoFormView = ({
  handleSubmit,
  submitFailed,
  submitting,
  valid,
}) => (
  <form onSubmit={handleSubmit}>
    {submitFailed && <div>Submit Failed</div>}
    <div>
      <Field name="title" component="input" type="text" />
    </div>
    <button type="submit" disabled={!valid || submitting}>
      Create
    </button>
  </form>
);

CreateTodoFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitFailed: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
};

export default CreateTodoFormView;
