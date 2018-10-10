import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const URI = 'https://fakerql.com/graphql';
/* eslint-disable-next-line */
export const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          window.console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) window.console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: URI,
      credentials: 'same-origin',
    }),
  ]),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  /* eslint-disable-next-line */
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
