import React, { useState, useEffect } from 'react'
import { Category } from '../Category/index.js'
import {
  Item,
  List
} from './styles'
import {
  ListSkeleton,
  ListSkeletonBody,
  ListSkeletonPhoto
} from '../../styles/categorySkeleton'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window.fetch('https://petgram-server-steel.vercel.app/categories')
      .then(res => res.json())
      .then((response) => {
        setCategories(response)
        setLoading(false)
      })
      .catch((err) => console.err(err))
  }, [])
  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    // Clear the event listener, does not bring overhead
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? [1, 2, 3, 4, 5, 6].map((key) => {
            return (
              <Item key={key}>
                <ListSkeleton>
                  <ListSkeletonPhoto circle />
                  <ListSkeletonBody circle />
                </ListSkeleton>
              </Item>
            )
          })
          : (
            categories.map((category, key) =>
              <Item key={key}>
                <Category
                  {...category}
                  path={`/pet/${category.id}`}
                />
              </Item>
            )
          )
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
