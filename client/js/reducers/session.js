import { START_SESSION, SET_SESSION_USER, END_SESSION } from '../constants/ActionTypes'

const initialState = {
  session: {
    state: 'logged out',
    user: undefined,
  }
}

export default function syncState(state = initialState, action) {
  switch (action.type) {
    case START_SESSION:
      return {
        state: 'logging in',
        username: undefined,
      }

    case SET_SESSION_USER:
      return {
        state: 'logged in',
        username: action.username,
      }

    case END_SESSION:
      return {
        state: 'logged out',
        username: undefined,
      }

    default:
      return state
  }
}
