import React from 'react';
import { PropTypes } from 'prop-types';

const Todo2 = ({ title }) => <div>{title}</div>;

Todo2.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Todo2;
