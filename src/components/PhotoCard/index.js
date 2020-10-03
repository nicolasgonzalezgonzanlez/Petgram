import React from 'react'
import PropTypes from 'prop-types'
import {
  ImgWrapper,
  Img,
  Article
} from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton/index'
import { UseLikeMutation } from '../../graphql/useToggleLikeMutation'
import { Link } from '@reach/router'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, ref] = useNearScreen()
  const { toggleLikePhoto } = UseLikeMutation()

  const handleFavClick = () => {
    setLiked(!liked)
    toggleLikePhoto({
      variables: {
        input: { id }
      }
    })
  }

  return (
    <Article ref={ref}>
      {show && (
        <>
          <Link
            to={`/detail/${id}`}
          >
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton
            liked={liked}
            likes={likes}
            onClick={handleFavClick}
          />
        </>
      )}
    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string,
  likes: PropTypes.number,
  src: PropTypes.string
}
