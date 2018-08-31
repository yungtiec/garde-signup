import React from 'react'
import {InputEmail} from '../index'
import Formsy from 'formsy-react'

export default function PasswordResetRequestForm({
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
      <div className="form-group row auth-form__submit-btn-container">
        <button className="btn btn-outline-primary" type="submit">
          {authMethodLabel}
        </button>
      </div>
    </Formsy>
  )
}
