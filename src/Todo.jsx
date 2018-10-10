import React from 'react';
import { PropTypes } from 'prop-types';

const Todo = ({ title }) => <div>{title}</div>;

Todo.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Todo;
