import React, { Component } from 'react';
import { client } from '.';
import TodosView from './TodosView';
import { GET_TODOS } from './graphql';

export default class TodosBroken extends Component {
  state = {
    error: false,
    loading: true,
    todos: [],
  };

  async componentDidMount() {
    try {
      const result = await client.query({
        query: GET_TODOS,
      });
      this.setState({
        loading: false,
        todos: result.data.allTodos,
      });
    } catch(err) {
      this.setState({
        error: true,
      });
    }
  }
  render() {
    const { error, loading, todos } = this.state;
    return (
      <TodosView
        error={error}
        loading={loading}
        todos={todos}
      />
    );
  }
}