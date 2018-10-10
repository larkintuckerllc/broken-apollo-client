import gql from 'graphql-tag';

export const CREATE_TODO = gql`
  mutation createTodo($title: String!) {
    createTodo(title: $title) {
      id
      title
    }
  }
`;

export const GET_TODOS = gql`
  query {
    allTodos {
      id
      title
    }
  }
`;

