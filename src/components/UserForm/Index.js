import React from 'react'
import { ToastsStore } from 'react-toasts'
import { useStateValue } from '../../Context'
import { useInputValue } from '../../hooks/useInputValue'
import AssetImage from '../../../assets/pets.png'
import {
  Form,
  Image,
  Container,
  Button,
  Input,
  Span,
  Spinner
} from './styles'
import { signup } from '../../graphql/RegisterMutation'
import { login } from '../../graphql/LoginMutation'

export const UserForm = ({title, setView }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const { registerMutation, data, loading, error } = signup(email.value, password.value)
  const { loginMutation, dataLogin, loadingLogin, errorLogin } = login(email.value, password.value)

  const { changeIsAuth } = useStateValue()

  const HandleOnSubmit = (event) => {
    event.preventDefault()
    if (title === 'Iniciar sesion') {
      loginMutation()
    } else {
      registerMutation()
    }
  }

  if (data != null) {
    changeIsAuth(data.signup)
  }
  if (dataLogin != null) {
    changeIsAuth(dataLogin.login)
  }
  if (error || errorLogin) {
    console.log(errorLogin)
    console.log(error)
    ToastsStore.error('unexpected error')
  }

  return (
    <Container>
      <Image src={AssetImage} />
      <Span>
        Inicia sesion en Petgram y descubre el mundo de las mascotas
      </Span>
      <Form onSubmit={HandleOnSubmit}>
        <Input
          placeholder='email'
          {...email}
        />
        <Input
          placeholder='password'
          type='password'
          {...password}
        /><br />
        {
          loading || loadingLogin
            ? <Spinner />
            : <Button> {title}</Button>
        }
      </Form>
      {
        title === 'Iniciar sesion' &&
          <span>
            No tienes una cuenta? <a onClick={() => setView()}>Registrate</a>
          </span>
      }
    </Container>
  )
}
