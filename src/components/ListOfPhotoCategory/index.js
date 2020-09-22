import React from 'react'
import { PhotoCard } from '../PhotoCard/index'
import {
  ListSkeleton,
  ListSkeletonBody,
  ListSkeletonPhoto
} from '../../styles/categorySkeleton'
import { getPhotos } from '../../graphql/getPhotos'

export const ListOfPhotoCard = ({ categoryId }) => {
  const [loading, error, data] = getPhotos(categoryId)

  if (error) console.log(error)

  return (
    <ul>
      {
        loading
          ? [1, 2, 3].map((key) =>
            <ListSkeleton key={key}>
              <ListSkeletonPhoto square />
              <ListSkeletonBody square />
            </ListSkeleton>
          )
          : data.photos.map((element, key) =>
            <PhotoCard key={key} {...element} />
          )
      }
    </ul>
  )
}
