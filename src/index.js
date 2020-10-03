import React from 'react'
import reactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/client'
import { Provider } from './Context'

import { App } from './App'

// connect graphql
const client = new ApolloClient({
  uri: 'https://petgram-server-steel.vercel.app/graphql',
  request: operation => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: error => {
    const { networkError } = error

    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
})

reactDOM.render(
  <Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
  , document.getElementById('app'))
