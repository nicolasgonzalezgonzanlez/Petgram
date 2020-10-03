import { createGlobalStyle } from 'styled-components'
import { breakpoints } from './breackpoints'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
       
  *, *::before, *::after {
    box-sizing: inherit;
  }
        
  ul, li, h1, h2, h3, p, button {
    margin: 0;
  }

  ul {
    list-style: none;
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    background: #fefefe;
    height: 80vh;
    margin: 0 auto;
    overscroll-behavior: none;
    @media ${breakpoints.xs} { 
      max-width: 500px;
    }
    @media ${breakpoints.sm} { 
      max-width: 670px;
    }
    @media ${breakpoints.md} { 
      max-width: 670px;
    }
    @media ${breakpoints.lg} { 
      max-width: 770px;
    }
    @media ${breakpoints.xl} { 
      max-width: 770px;
    }
  }

  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10%;
  }
`
