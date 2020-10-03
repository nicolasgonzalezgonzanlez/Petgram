import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'
import { breakpoints } from '../../styles/breackpoints'

export const List = styled.ul`
  margin-right: 40px;
  display: flex;
  overflow: scroll;
  width: 100%;
  margin-bottom: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
  @media ${breakpoints.md} { 
    justify-content: center;
  }
  @media ${breakpoints.lg} { 
    justify-content: center;
  }
  @media ${breakpoints.xl} { 
    justify-content: center;
  }
  ${({ fixed }) => fixed && css`
    {
      ${fadeIn({ time: '0.5s', type: 'ease-in-out' })}
      background: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      left: 0;
      margin: 0 auto;
      padding: 5px;
      position: fixed;
      right: 0;
      top: -20px;
      transform: scale(.5);
      z-index:1;
      @media ${breakpoints.xs} { 
        max-width: 450px;
      }
      @media ${breakpoints.sm} { 
        max-width: 500px;
      }
      @media ${breakpoints.md} { 
        max-width: 650px;
      }
      @media ${breakpoints.lg} { 
        max-width: 650px;
      }
      @media ${breakpoints.xl} { 
        max-width: 700px;
      }
    }
  `}
`

export const Item = styled.li`
  padding: 0 8px;
`
