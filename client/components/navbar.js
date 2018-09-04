import './Navbar.scss'
import React, {Component} from 'react'
import autoBind from 'react-autobind'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {isLoggedIn} from '../store'
import {AuthWidget} from './index'

class Navbar extends Component {
  constructor(props) {
    super(props)
    autoBind(this)
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <div className="header">
        <nav className="navbar navbar-expand-md no-gutters navbar--logo">
          <div className="box--left">
            <Link className="logo-header my-0 ml-0" to="/landing">
              <img
                width="150px"
                height="auto"
                src="/img/logo-orange.png"
              />
            </Link>
          </div>
          <div className="box--right">
            {isLoggedIn ? (
              <AuthWidget inNavbar={true} />
            ) : (
              <Link to="/login" className="navbar__nav-item last">
                login
              </Link>
            )}
          </div>
        </nav>
      </div>
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: isLoggedIn(state)
  }
}

export default withRouter(connect(mapState, {})(Navbar))

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
