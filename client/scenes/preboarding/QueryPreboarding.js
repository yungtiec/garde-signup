import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {SquareLoader} from 'halogenium'
import PropTypes from 'prop-types'
import autoBind from 'react-autobind'
import Loadable from 'react-loadable'
import {getUser} from '../../store'
import * as colors from '../../color-constants'

const LoadableQueryPreboarding = Loadable({
  loader: () => import('./Preboarding'),
  loading: () => (
    <SquareLoader
      className="route__loader"
      color={colors.burntSienna}
      size="16px"
      margin="4px"
    />
  ),
  render(loaded, props) {
    let Preboarding = loaded.default
    return <Preboarding {...props} />
  },
  delay: 400
})

class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    autoBind(this)
  }

  render() {
    return <LoadableQueryPreboarding {...this.props} />
  }
}

const mapState = state => ({user: getUser(state)})

const actions = {}

export default withRouter(connect(mapState, actions)(MyComponent))
