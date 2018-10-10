import React from 'react';
import { Mutation } from 'react-apollo';
import { CREATE_TODO, GET_TODOS } from './graphql';
import CreateTodoFormRedux from './CreateTodoFormRedux';

const CreateTodo = () => (
  <Mutation
    mutation={CREATE_TODO}
    update={(cache, { data: { createTodo } }) => {
      const { allTodos } = cache.readQuery({ query: GET_TODOS });
      cache.writeQuery({
        query: GET_TODOS,
        data: { allTodos: allTodos.concat([createTodo]) },
      });
      window.alert('SUCCESS'); // SHOULD BE SOME GLOBAL STATE
    }}
  >
    {createTodo => <CreateTodoFormRedux createTodo={createTodo} />}
  </Mutation>
);

export default CreateTodo;
