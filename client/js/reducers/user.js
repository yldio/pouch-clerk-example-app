import { SET_USER } from '../constants/ActionTypes'

const initialState = {
  user: undefined
}

export default function syncState(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return action.user

    default:
      return state
  }
}
