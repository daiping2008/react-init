import * as actionTypes from './actionTypes'

const defaultState = {
  username: 'Susan'
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.SET_USERNAME:
      const newState = JSON.parse(JSON.stringify(state))
      newState.username = action.username
      return newState
    default:
      return state
  }
}