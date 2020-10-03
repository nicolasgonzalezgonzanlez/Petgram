import styled from 'styled-components'

export const Image = styled.img`
  height: 100%;
`

export const Container = styled.div`
  max-height: 300px;
  padding: 20px;
`
export const ContainerFlex = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(2, 300px);
`
