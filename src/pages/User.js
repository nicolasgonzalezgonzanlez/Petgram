import React from 'react'
import { useStateValue } from '../Context'
import { Helmet } from '../components/Helmet/index'

export const User = () => {
  const { changeIsLogout } = useStateValue()

  return (
    <>
      <Helmet
        title='Datos de usuario'
        subtitle='Detalles de los datos de usuario'
      />
      <h1>User</h1>
      <button onClick={() => changeIsLogout()}>Logout</button>
    </>
  )
}
