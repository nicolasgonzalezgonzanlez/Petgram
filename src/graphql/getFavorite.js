import { useQuery } from '@apollo/client'
import { gql } from 'apollo-boost'

const GET_FAVORITE = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

export const getFavs = () => {
  const { loading, error, data } = useQuery(GET_FAVORITE, {
    fetchPolicy: 'cache-and-network'
  })

  return [loading, error, data]
}
