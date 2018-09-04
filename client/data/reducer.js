import {combineReducers} from 'redux'

import {default as userReducer} from './user/reducer'
import {default as environmentReducer} from './environment/reducer'

export default combineReducers({
  user: userReducer,
  environment: environmentReducer
})

export * from './user/reducer'
export * from './user/actions'
export * from './environment/reducer'
export * from './environment/actions'
