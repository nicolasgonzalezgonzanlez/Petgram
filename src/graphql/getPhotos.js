import { useQuery } from '@apollo/client'
import { gql } from 'apollo-boost'

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
export const getPhotos = (categoryId) => {
  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId: categoryId }
  })
  return [loading, error, data]
}
