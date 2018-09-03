import * as types from './actionTypes'

const defaultUser = {}

export default function(state = defaultUser, action) {
  switch (action.type) {
    case types.GET_USER:
      return {
        ...state,
        ...action.user
      }
    case types.REMOVE_USER:
      return defaultUser
    case types.PROFILE_UPDATED:
      return {
        ...state,
        first_name: action.profile.firstName,
        last_name: action.profile.lastName,
        name: action.profile.name,
        displayName: action.profile.displayName,
        organization: action.profile.organization
      }
    case types.ONBOARD_STATUS_UPDATED:
      return {
        ...state,
        onboard: true
      }
    default:
      return state
  }
}

export const isLoggedIn = state => {
  return !!state.data.user.id
}

export const isAdmin = state => {
  return (
    state.data.user.roles &&
    state.data.user.roles.filter(r => r.name === 'admin').length
  )
}

export const getUser = state => {
  return state.data.user
}
