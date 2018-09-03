import React from 'react'
import {withRouter, Switch, Route, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  PreboardingIntro,
  PreboardingStepOne,
  PreboardingStepTwo,
  PreboardingStepThree
} from './components'

const Preboarding = ({user, match}) => {
  return (
    <Switch>
      <Route path={`${match.path}/intro`} render={props => <PreboardingIntro {...props} />} />
      <Route path={`${match.path}/1`}  render={props => <PreboardingStepOne {...props} />} />
      <Route path={`${match.path}/1`}  render={props => <PreboardingStepTwo {...props} />} />
      <Route path={`${match.path}/3`}  render={props => <PreboardingStepThree {...props} />} />
      <Redirect from="/" exact to="/intro" />
    </Switch>
  )
}
Preboarding.propTypes = {
  user: PropTypes.object.isRequired
}

export default withRouter(Preboarding)
