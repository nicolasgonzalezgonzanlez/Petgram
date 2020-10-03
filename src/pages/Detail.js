import React from 'react'
import PropTypes from 'prop-types'
import { PhotoCardWithQuery } from '../components/PhotoCardWithQuery/index'
import { Helmet } from '../components/Helmet/index'

export const Detail = ({ id }) => (
  <>
    <Helmet
      title={`Detalles de ${id}`}
      subtitle='Detalle de una foto de mascota'
    />
    <PhotoCardWithQuery id={id} />
  </>
)
Detail.propTypes = {
  id: PropTypes.string
}
