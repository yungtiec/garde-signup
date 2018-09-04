import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import {Link} from 'react-router-dom'
import {pizazz} from '../../color-constants'

export const RegistrationBackground = styled.div`
  background: #ffa544;
  width: 100%;
  padding: 56px 0;
`
const RegistrationHeaderDiv = styled.div`
  margin-top: 56px;
  margin-bottom: 42px;
  text-align: center;
`

export const RegistrationHeader = () => (
  <RegistrationHeaderDiv>
    <Link className="my-0 mx-0" to="/landing">
      <img
        width="170px"
        height="auto"
        className="logo__large"
        src="/img/logo-white.png"
      />
    </Link>
  </RegistrationHeaderDiv>
)

const RegistrationFooterDiv = styled.div`
  clear: both;
  text-align: center;
  min-height: 100px;
  padding: 60px 0;
`

export const RegistrationFooter = () => (
  <RegistrationFooterDiv>
    <img
      width="100px"
      height="auto"
      className="logo__large"
      src="/assets/consensys-logo-white-transparent.png"
    />
  </RegistrationFooterDiv>
)

export const RegistrationCard = styled.div`
  background: white;
  margin: auto;
  max-width: 370.5px;
  padding: 50px;
  ${breakpoint('sm')`
    max-width: 370.5px;
  `}
  ${breakpoint('md')`
    max-width: 617.5px;
  `}
  ${breakpoint('lg')`
    max-width: 650px;
  `}
`

export {default as AuthForm} from './AuthForm'
export {default as RegistrationCardFooter} from './RegistrationCardFooter'
export {Login, Signup, RequestPasswordReset, ResetPassword} from './AuthPages'
export {default as OauthButtons} from './OauthButtons'
export {default as PasswordResetRequestForm} from './PasswordResetRequestForm'
export {default as PasswordResetForm} from './PasswordResetForm'
