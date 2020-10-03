import { useMutation } from '@apollo/client'
import { gql } from 'apollo-boost'

const LOGIN = gql`
  mutation signup($input:UserCredentials!) {
    login (input: $input)
  }
`

export const login = (email, password) => {
  const [loginMutation, { data: dataLogin, loading: loadingLogin, error: errorLogin }] = useMutation(LOGIN, { variables: { input: { email, password } } })

  return { loginMutation, dataLogin, loadingLogin, errorLogin }
}
