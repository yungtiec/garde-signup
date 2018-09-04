import './AuthPages.scss'
import React, {Component} from 'react'
import autoBind from 'react-autobind'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {withRouter, Link} from 'react-router-dom'
import {
  auth,
  signinWithUport,
  requestPasswordReset,
  resetPassword,
  verifyUportOnMobile
} from '../../data/reducer'
import {
  AuthForm,
  PasswordResetRequestForm,
  PasswordResetForm,
  RegistrationCardFooter,
  RegistrationBackground,
  RegistrationHeader,
  RegistrationCard,
  RegistrationFooter
} from './index'

class AuthPages extends Component {
  static propTypes = {
    authMethod: PropTypes.string.isRequired,
    authMethodLabel: PropTypes.string.isRequired,
    error: PropTypes.object
  }

  constructor(props) {
    super(props)
    autoBind(this)
    this.state = {canSubmit: false}
  }

  componentDidMount() {
    if (window.location.href.split('access_token=').length > 1) {
      this.props.verifyUportOnMobile(
        window.location.href.split('access_token=')[1]
      )
    }
  }

  disableButton() {
    this.setState({canSubmit: false})
  }

  enableButton() {
    this.setState({canSubmit: true})
  }

  handleSubmit(authMethod, model) {
    const email = model.email
    const password = model.password
    if (authMethod === 'requestPasswordReset') {
      this.props.requestPasswordReset(email)
    } else if (authMethod === 'resetPassword') {
      this.props.resetPassword({
        password,
        token: this.props.match.params.token
      })
    } else {
      var userInfo =
        authMethod === 'login'
          ? {email, password}
          : {
              email,
              password,
              first_name: model.firstName,
              last_name: model.lastName,
              organization: model.organization
            }
      this.props.auth(userInfo, authMethod)
    }
  }

  render() {
    const {authMethod, authMethodLabel, error, signinWithUport} = this.props

    return (
      <RegistrationBackground>
        <RegistrationHeader />
        <RegistrationCard>
          {authMethod === 'requestPasswordReset' ? (
            <PasswordResetRequestForm
              handleSubmit={this.handleSubmit}
              enableButton={this.enableButton}
              disableButton={this.disableButton}
              authMethod={authMethod}
              authMethodLabel={authMethodLabel}
            />
          ) : authMethod === 'resetPassword' ? (
            <PasswordResetForm
              handleSubmit={this.handleSubmit}
              enableButton={this.enableButton}
              disableButton={this.disableButton}
              authMethod={authMethod}
              authMethodLabel={authMethodLabel}
            />
          ) : (
            <AuthForm
              enableButton={this.enableButton}
              disableButton={this.disableButton}
              authMethod={authMethod}
              authMethodLabel={authMethodLabel}
              handleSubmit={this.handleSubmit}
              error={error}
              signinWithUport={signinWithUport}
            />
          )}
        </RegistrationCard>
        <RegistrationCardFooter authMethod={authMethod} />
        <RegistrationFooter />
      </RegistrationBackground>
    )
  }
}

const mapLogin = state => {
  return {
    authMethod: 'login',
    authMethodLabel: 'Login',
    error: state.data.user.error
  }
}

const mapSignup = state => {
  return {
    authMethod: 'signup',
    authMethodLabel: 'Sign Up',
    error: state.data.user.error
  }
}

const mapRequestPasswordReset = state => {
  return {
    authMethod: 'requestPasswordReset',
    authMethodLabel: 'Request password reset'
  }
}

const mapResetPassword = state => {
  return {
    authMethod: 'resetPassword',
    authMethodLabel: 'Reset password'
  }
}

export const Login = withRouter(
  connect(mapLogin, {auth, signinWithUport, verifyUportOnMobile})(AuthPages)
)
export const Signup = withRouter(
  connect(mapSignup, {auth, signinWithUport, verifyUportOnMobile})(AuthPages)
)
export const RequestPasswordReset = connect(mapRequestPasswordReset, {
  requestPasswordReset
})(AuthPages)
export const ResetPassword = withRouter(
  connect(mapResetPassword, {resetPassword})(AuthPages)
)
