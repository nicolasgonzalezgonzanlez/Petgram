import React from 'react'
import { Error404 } from '../components/404/index'
import { Helmet } from '../components/Helmet/index'
export const NotFound = () => (
  <>
    <Helmet
      title='Oops!'
      subtitle='error 404, pagina no encontrada'
    />
    <Error404 />
  </>
)
