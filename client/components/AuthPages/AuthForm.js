import React from 'react'
import {InputEmail, InputPassword, InputText} from '../index'
import Formsy from 'formsy-react'
import {Link} from 'react-router-dom'

export default function AuthForm({
  enableButton,
  disableButton,
  authMethod,
  authMethodLabel,
  handleSubmit,
  error,
  signinWithUport
}) {
  return (
    <Formsy
      className="auth__form"
      onValidSubmit={model => handleSubmit(authMethod, model)}
      name={authMethod}
      onValid={enableButton}
      onInvalid={disableButton}
    >
      {authMethod === 'signup' && (
        <div className="form-group d-flex">
          <div style={{margin: '0 1% 0 0', width: '49%'}}>
            <label htmlFor="firstName">
              <small>First Name</small>
            </label>
            <InputText name="firstName" required />
          </div>
          <div style={{margin: '0 0 0 1%', width: '49%'}}>
            <label htmlFor="lastName">
              <small>Last Name</small>
            </label>
            <InputText name="lastName" required />
          </div>
        </div>
      )}
      {authMethod === 'signup' && (
        <div className="form-group  d-flex flex-column">
          <label htmlFor="organization">
            <small>Organization</small>
          </label>
          <InputText name="organization" />
        </div>
      )}
      <div className="form-group d-flex flex-column">
        <label htmlFor="email">
          <small>Email</small>
        </label>
        <InputEmail
          name="email"
          validations="isEmail"
          validationError="This is not a valid email"
          required
        />
      </div>
      <div className="form-group d-flex flex-column">
        <label htmlFor="password">
          <small>Password</small>
        </label>
        <InputPassword
          name="password"
          validations="minLength:8"
          validationError="Password must have a minimum length of 8 characters"
          required
        />
      </div>
      {authMethod === 'login' ? (
        <Link to="/request-password-reset" className="">
          forget password?
        </Link>
      ) : null}
      {authMethod === 'signup' && (
        <div className="form-group  d-flex flex-column">
          <label htmlFor="password">
            <small>Confirm password</small>
          </label>
          <InputPassword
            name="confirm"
            validations="equalsField:password"
            validationError="Password and confirmation password do not match"
          />
        </div>
      )}
      <div className="form-group d-flex justify-content-between mt-4">
        <button className="btn btn-outline-primary" type="submit">
          {authMethodLabel}
        </button>
        <div className="d-flex align-items-center oauth-icons m-0">
          <p className="mb-0">or</p>
          <img
            width="40px"
            height="40px"
            className="ml-2"
            src="/assets/google-logo.png"
            href="/auth/google"
            style={{cursor: 'pointer'}}
          />
          <img
            width="40px"
            height="40px"
            className="ml-2"
            src="/assets/uport.jpg"
            style={{borderRadius: '25px', cursor: 'pointer'}}
            onClick={signinWithUport}
          />
        </div>
      </div>
      {error && error.response && <div>{error.response.data}</div>}
    </Formsy>
  )
}
