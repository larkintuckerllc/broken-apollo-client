import { PropTypes } from 'prop-types';
import React from 'react';
import Todo from './Todo';

const TodosView = ({ error, loading, todos }) => {
  if (loading) return <div>LOADING</div>;
  if (error) return <div>ERROR</div>;
  return (
    todos.map(todo => (
      <Todo
        key={todo.id}
        title={todo.title}
      />
    ))
  );
};

TodosView.propTypes = {
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  todos: PropTypes.array.isRequired,
};

export default TodosView;