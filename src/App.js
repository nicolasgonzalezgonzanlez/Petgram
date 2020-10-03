import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo/Index'
import { NavBar } from './components/NavBar/index'
import { Route } from './router/Router'
import { ToastsContainer, ToastsStore } from 'react-toasts'

export const App = () => (
  <>
    <ToastsContainer store={ToastsStore} />
    <Logo />
    <GlobalStyle />
    <Route />
    <NavBar />
  </>
)
