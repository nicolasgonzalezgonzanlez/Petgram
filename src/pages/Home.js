import React from 'react'
import PropTypes from 'prop-types'
import { ListOfCategories } from '../components/listOfCategories/index'
import { ListOfPhotoCard } from '../components/ListOfPhotoCategory/index'
import { Helmet } from '../components/Helmet/index'

const HomePage = ({ id }) => {
  return (
    <>
      <Helmet
        title='tu app de photo de mascotas'
        subtitle='Con petgram puedes encontrar fotos de mascotas'
      />
      <ListOfCategories />
      <ListOfPhotoCard categoryId={id} />
    </>
  )
}
export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})

HomePage.propTypes = {
  id: PropTypes.string
}
