import React from 'react'
import assetImage from '../../../assets/404.png'
import {
  Container,
  Title,
  Image
} from './styless'

export const Error404 = () => {
  return (
    <div>
      <Container>
        <Title>OOPS!</Title>
        <span>¿Que habra paso?</span>
        <Image src={assetImage} />
      </Container>
    </div>
  )
}
