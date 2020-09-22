import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo/Index'
import { Router } from '@reach/router'
import { Home } from './pages/Home'
export const App = () => (
  <>
    <Logo />
    <GlobalStyle />
    <Router>
      <Home path='/' />
      <Home path='/pet/:id' />
    </Router>
  </>
)
