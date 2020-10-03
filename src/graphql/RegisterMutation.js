import { useMutation } from '@apollo/client'
import { gql } from 'apollo-boost'

const REGISTER = gql`
  mutation signup($input:UserCredentials!) {
    signup (input: $input)
  }
`

export const signup = (email, password) => {
  const [registerMutation, { data, loading, error }] = useMutation(REGISTER, { variables: { input: { email, password } } })

  return { registerMutation, data, loading, error }
}
