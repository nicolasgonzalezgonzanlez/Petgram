import React from 'react'
import { ImageFavs } from '../components/imageFavs/index'
import { Helmet } from '../components/Helmet/index'

export const Favs = () => (
  <>
    <Helmet
      title='Tus favs'
      subtitle='Aqui encontraras tus fotos favoritas'
    />
    <ImageFavs />
  </>
)
