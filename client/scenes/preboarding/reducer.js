import {omit} from 'lodash'
import {default as dataReducer} from './data/reducer'

const initialState = {}

export default function reduce(state = initialState, action) {
  var rest
  switch (action.type) {
    default:
      rest = omit(state, Object.keys(initialState))
      return {
        ...state,
        data: dataReducer(rest.data, action)
      }
  }
}
