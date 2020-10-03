import React, { useState } from 'react'
import { UserForm } from '../components/UserForm/Index'
import { Helmet } from '../components/Helmet/index'

export const NotRegisteredUser = () => {
  const [view, setView] = useState(false)

  const handleView = () => {
    setView(true)
  }
  return (
    <>
      <Helmet
        title='Login'
        subtitle='Pagina de registro de usuario'
      />
      {
        view === true
          ? <UserForm title='registrarse' />
          : <UserForm title='Iniciar sesion' setView={handleView} />
      }
    </>
  )
}
