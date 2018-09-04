import React, {Component} from 'react'
import Routes from './routes'
import NotificationsSystem from 'reapop'
import theme from 'reapop-theme-wybo'
import history from './history'
import ReactGA from 'react-ga'
const isProduction = process.env.NODE_ENV === 'production'

class App extends Component {
  componentDidMount() {
    if (isProduction) {
      ReactGA.initialize('UA-119328185-1', {
        titleCase: false
      })
      history.listen(location => {
        ReactGA.set({page: location.pathname})
        ReactGA.pageview(location.pathname)
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <Routes />
        <NotificationsSystem theme={theme} />
      </React.Fragment>
    )
  }
}

export default App
