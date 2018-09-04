import './AuthWidget.scss'
import React, {Component} from 'react'
import autoBind from 'react-autobind'
import {connect} from 'react-redux'
import Avatar from 'react-avatar'
import {getUser, isLoggedIn, logout} from '../store'
import * as colors from '../color-constants'

class AuthWidget extends Component {
  constructor(props) {
    super(props)
    autoBind(this)
    this.state = {
      dropdown: false
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  toggleDropdown() {
    const {dropdown} = this.state
    this.setState({
      dropdown: !dropdown
    })
  }

  handleClickOutside(evt) {
    if (this.wrapperRef && !this.wrapperRef.contains(evt.target))
      this.setState({
        dropdown: false
      })
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }

  render() {
    const {isLoggedIn, logout, width, user} = this.props

    if (isLoggedIn)
      return (
        <div className="auth-widget--navbar" ref={this.setWrapperRef}>
          <div className="auth-widget--navbar__avatar-container">
            <Avatar
              name={user.displayName.trim() ? user.displayName : '?'}
              size={46}
              color={colors.pizazz}
              fgColor="#ffffff"
              onClick={this.toggleDropdown}
            />
          </div>
          {this.state.dropdown && (
            <div className="auth-widget--navbar__dropdown">
              <div
                className="auth-widget--navbar__dropdown-item last"
                onClick={logout}
              >
                logout
              </div>
            </div>
          )}
        </div>
      )
    else return null
  }
}

const mapState = state => {
  return {
    isLoggedIn: isLoggedIn(state),
    width: state.data.environment.width,
    user: getUser(state)
  }
}

const actions = {
  logout
}

export default connect(mapState, actions)(AuthWidget)
