import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  LayoutWithNav,
  RouteWithLayout,
  RequestPasswordReset,
  ResetPassword,
  UserHome
} from './components'
import {me, isLoggedIn, initEnvironment} from './store'
import {Preboarding} from './scenes'

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route
          path="/request-password-reset"
          component={RequestPasswordReset}
        />
        <Route path="/reset-password/:token" component={ResetPassword} />
        <RouteWithLayout
          layout={LayoutWithNav}
          path="/home"
          component={UserHome}
        />
        <Route path="/preboarding" component={Preboarding} />
      </Switch>
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: isLoggedIn(state)
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
      dispatch(initEnvironment())
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Routes))

Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
