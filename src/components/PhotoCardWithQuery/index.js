import React from 'react'
import PropTypes from 'prop-types'
import { PhotoCard } from '../PhotoCard/index'
import { getSinglePhoto } from '../../graphql/getSinglePhoto'
import {
  ListSkeleton,
  ListSkeletonBody,
  ListSkeletonPhoto
} from '../../styles/categorySkeleton'

export const PhotoCardWithQuery = ({ id }) => {
  const [loading, error, data] = getSinglePhoto(id)

  if (error) console.log(error)

  return (
    <>
      {
        loading
          ? (
            <ListSkeleton>
              <ListSkeletonPhoto square />
              <ListSkeletonBody square />
            </ListSkeleton>
          )
          : (
            <PhotoCard {...data} />
          )
      }
    </>
  )
}

PhotoCardWithQuery.propTypes = {
  id: PropTypes.string
}
