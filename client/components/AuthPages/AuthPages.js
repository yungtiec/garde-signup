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
import AuthForm from './AuthForm'
import PasswordResetRequestForm from './PasswordResetRequestForm'
import PasswordResetForm from './PasswordResetForm'
import AuthFormFooter from './AuthFormFooter'

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
      <div className="auth-page">
        <div className="auth__form-header">
          <Link className="my-0 mx-0" to="/landing">
            <img
              width="170px"
              height="auto"
              className="logo__large"
              src="/img/logo-orange.png"
            />
          </Link>
        </div>
        <div className="auth__form-wrapper">
          <div className="auth__form-contents">
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
          </div>
          <AuthFormFooter authMethod={authMethod} />
        </div>
        <div className="auth-page__footer">
          <div className="logo-consensys">
            <img
              width="100px"
              height="auto"
              className="logo__large"
              src="/assets/consensys-logo-white-transparent.png"
            />
          </div>
        </div>
      </div>
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
