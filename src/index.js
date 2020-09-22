import React from 'react'
import reactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/client'

import { App } from './App'

// connect graphql
const client = new ApolloClient({
  uri: 'https://petgram-server-steel.vercel.app/graphql'
})

reactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById('app'))
