import React from 'react'
import AuthForm from './AuthForm'
import OauthButtons from './OauthButtons'

export default function AuthContainer({
  enableButton,
  disableButton,
  authMethod,
  authMethodLabel,
  handleSubmit,
  error,
  signinWithUport
}) {
  return (
    <div className="d-flex flex-column">
      <AuthForm
        enableButton={enableButton}
        disableButton={disableButton}
        authMethod={authMethod}
        authMethodLabel={authMethodLabel}
        handleSubmit={handleSubmit}
        error={error}
        signinWithUport={signinWithUport}
      />
      <OauthButtons signinWithUport={signinWithUport} />
    </div>
  )
}
