import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import CreateTodoFormRF from './CreateTodoFormRF';

export default class CreateTodoFormSubmit extends Component {
  handleSubmit = async ({ title }) => {
    const { createTodo, reset } = this.props;
    await createTodo({ variables: { title } });
    reset();
  };

  render() {
    return <CreateTodoFormRF onSubmit={this.handleSubmit} />;
  }
}

CreateTodoFormSubmit.propTypes = {
  createTodo: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};
