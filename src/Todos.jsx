import React from 'react';
import { Query } from 'react-apollo';
import { GET_TODOS } from './graphql';
import TodosView from './TodosView';

const Todos =  () => (
  <Query query={GET_TODOS}>
    {({ data: { allTodos = [] } = {}, error, loading }) => (
      <TodosView
        error={error !== undefined}
        loading={loading}
        todos={allTodos} />
    )}
  </Query>
);

export default Todos;
