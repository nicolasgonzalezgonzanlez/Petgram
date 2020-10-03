import styled from 'styled-components'
import { breakpoints } from '../../styles/breackpoints'

export const Container = styled.div`
  background: #FCB82F;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: white;
    @media ${breakpoints.xs} { 
      height: 30vh;
    }
    @media ${breakpoints.sm} { 
      height: 73vh;
    }
    @media ${breakpoints.md} { 
      height: 50vh;
    }
    @media ${breakpoints.lg} { 
      height: 50vh;
    }
    @media ${breakpoints.xl} { 
      height: 33vh;
    }
`
export const Title = styled.h1`
  font-size: 54px;
  margin: 10px;
`
export const Image = styled.img`
  width: 50%;
  margin: auto;
`
