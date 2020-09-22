import styled, { css, keyframes } from 'styled-components'

const skeletonBackground = () => (
  css`animation: ${skeletonLoading} 1.6s ease-in-out infinite;`
)

const skeletonLoading = keyframes`
  from {
    background-position: 0% 0%;
    background: linear-gradient(-90deg, #C1C1C1 0%, #F8F8F8 50%, #C1C1C1 100%);
    background-size: 400% 400%;
  }
  to {
    background-position: -135% 0%;
    background: linear-gradient(-90deg, #F0F0F0 0%, #F8F8F8 50%, #F0F0F0 100%);
    background-size: 400% 400%;
  }
`

export const ListSkeleton = styled.div`
  margin-bottom: 20px;
`
export const ListSkeletonPhoto = styled.div`
  ${skeletonBackground()}
  background: #909090;
   ${({ square }) => square && css`
    {
      height: 33vh;
      width: 100%;
      border-radius: 3%;
      margin-bottom: 10px;
      margin-top: 20px;
    }
  `} 
  ${({ circle }) => circle && css`
    {
      height: 10vh;
      width: 5vw;
      border-radius: 80%;
      margin-bottom: 10px;
    }
  `}
`
export const ListSkeletonBody = styled.div`
  ${skeletonBackground()}
  background: #909090;
  ${({ square }) => square && css`
    {
      height: 30px;
      width: 100%;
      border-radius: 3%;
    }
  `} 
  ${({ circle }) => circle && css`
    {
      height: 20px;
      width: 30px;
      margin: auto;   
    }
  `}
`
