import styled from 'styled-components'
import { breakpoints } from '../../styles/breackpoints'
import { Link as LinkRouter } from '@reach/router'

export const Svg = styled.svg`
  width: 220px;
  margin-left: -10px;
`
export const Link = styled(LinkRouter)`
    @media ${breakpoints.sm} {
    display: flex;
    justify-content: center;
    }
    @media ${breakpoints.md} { 
    display: flex;
    justify-content: center;
    }
    @media ${breakpoints.lg} { 
    display: flex;
    justify-content: center;
    }
    @media ${breakpoints.xl} { 
    display: flex;
    justify-content: center;
    }

`
