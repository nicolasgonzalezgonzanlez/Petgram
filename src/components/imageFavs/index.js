import React from 'react'
import { ToastsStore } from 'react-toasts'
import { getFavs } from '../../graphql/getFavorite'
import {
  ListSkeleton,
  ListSkeletonBody,
  ListSkeletonPhoto
} from '../../styles/categorySkeleton'
import {
  Container,
  Image,
  ContainerFlex
} from './styles'

export const ImageFavs = () => {
  const [loading, error, data] = getFavs()

  if (error) {
    ToastsStore.error('unexpected error')
  }
  if (data) {
    console.log(data.favs)
  }
  return (
    <ContainerFlex>
      {
        loading && [1, 2, 3].map((key) =>
          <ListSkeleton key={key}>
            <ListSkeletonPhoto square />
            <ListSkeletonBody square />
          </ListSkeleton>
        )
      }
      {
        data && data.favs.length === 0
          ? (
            <h1>No hay archivos aun</h1>
          ) : (
            <>
              {
                data && data.favs.map((image) => {
                  return (
                    <Container key={image.id}>
                      <Image src={image.src} />
                    </Container>
                  )
                })
              }
            </>
          )
      }
    </ContainerFlex>
  )
}
