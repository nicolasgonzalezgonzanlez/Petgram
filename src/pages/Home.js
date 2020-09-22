import React from 'react'
import { ListOfCategories } from '../components/listOfCategories/index'
import { ListOfPhotoCard } from '../components/ListOfPhotoCategory/index'

export const Home = ({ id }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCard categoryId={id} />
    </>
  )
}
