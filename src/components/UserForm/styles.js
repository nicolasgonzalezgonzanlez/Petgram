import styled, { keyframes } from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`
export const Span = styled.span`
  font-size: 18px;
  margin: 20px;
  color: #949393;
`

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #de1be569;
  outline: 0;
  font-size: 1rem;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: #929292;
  }
  &:focus  {
    border-bottom: 2px solid #f6a43f;
  }
`
export const Button = styled.button`
  padding: 16px;
  margin: 0px 20px 20px 20px;
  border-radius: 30px;
  color: white;
  background: rgba(220,13,247,1);
  background: -moz-linear-gradient(left, rgba(220,13,247,1) 0%, rgba(249,180,42,1) 100%);
  background: -webkit-gradient(left top, right top, color-stop(0%, rgba(220,13,247,1)), color-stop(100%, rgba(249,180,42,1)));
  background: -webkit-linear-gradient(left, rgba(220,13,247,1) 0%, rgba(249,180,42,1) 100%);
  background: -o-linear-gradient(left, rgba(220,13,247,1) 0%, rgba(249,180,42,1) 100%);
  background: -ms-linear-gradient(left, rgba(220,13,247,1) 0%, rgba(249,180,42,1) 100%);
  background: linear-gradient(to right, rgba(220,13,247,1) 0%, rgba(249,180,42,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#dc0df7', endColorstr='#f9b42a', GradientType=1 );
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10vh 0 10vh;
  text-align: center;
`
export const Image = styled.img`
  max-width: 70%;
  margin: auto;
`
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid #f59a4b;
  border-right: 2px solid #f59a4b;
  border-bottom: 2px solid #f59a4b;
  border-left: 2px solid #fefefe;
  background: transparent;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin: auto;
`
