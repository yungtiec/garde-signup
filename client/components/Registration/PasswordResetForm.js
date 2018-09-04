import React from 'react'
import {InputPassword} from '../index'
import Formsy from 'formsy-react'

export default function PasswordResetForm({
  handleSubmit,
  enableButton,
  disableButton,
  authMethod,
  authMethodLabel
}) {
  return (
    <Formsy
      className="auth__form"
      onValidSubmit={model => handleSubmit(authMethod, model)}
      name={authMethod}
      onValid={enableButton}
      onInvalid={disableButton}
    >
      <div className="form-group row d-flex flex-column">
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
      <div className="form-group row d-flex flex-column">
        <label htmlFor="password">
          <small>Confirm password</small>
        </label>
        <InputPassword
          name="confirm"
          validations="equalsField:password"
          validationError="Password and confirmation password do not match"
        />
      </div>
      <div className="form-group row auth-form__submit-btn-container">
        <button className="btn btn-outline-primary" type="submit">
          {authMethodLabel}
        </button>
      </div>
    </Formsy>
  )
}
