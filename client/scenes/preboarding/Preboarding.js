import React from 'react'
import {withRouter, Switch, Route, Redirect} from 'react-router-dom'
import Steps, {Step} from 'rc-steps'
import PropTypes from 'prop-types'
import {
  PreboardingStepOne,
  PreboardingStepTwo,
  PreboardingStepThree
} from './components'
import {
  RegistrationBackground,
  RegistrationHeader,
  RegistrationCard,
  RegistrationCardFooter,
  RegistrationFooter
} from '../../components'

const Preboarding = ({user, match}) => {
  return (
    <RegistrationBackground>
      <RegistrationHeader />
      <RegistrationCard>
        <Steps current={user.preboard_step - 1}>
          <Step title="Step 1" description="Basic information" />
          <Step title="Step 2" description="Verify your contribution" />
          <Step title="Step 3" description="Refer friends" />
        </Steps>
        <Switch>
          <Route
            path={`${match.path}/1`}
            render={props => <PreboardingStepOne {...props} />}
          />
          <Route
            path={`${match.path}/2`}
            render={props => <PreboardingStepTwo {...props} />}
          />
          <Route
            path={`${match.path}/3`}
            render={props => <PreboardingStepThree {...props} />}
          />
          <Redirect from="/" exact to={`/${user.preboard_step}`} />
        </Switch>
      </RegistrationCard>
      <RegistrationCardFooter authMethod={null} />
      <RegistrationFooter />
    </RegistrationBackground>
  )
}

Preboarding.propTypes = {
  user: PropTypes.object.isRequired
}

export default withRouter(Preboarding)
