import { useQuery } from '@apollo/client'
import { gql } from 'apollo-boost'

const GET_PHOTO_ID = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`
export const getSinglePhoto = (id) => {
  const { loading, error, data } = useQuery(GET_PHOTO_ID, {
    variables: { id }
  })

  return [loading, error, data]
}
