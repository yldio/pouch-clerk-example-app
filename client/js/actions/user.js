import * as types from '../constants/ActionTypes'

export function startSession(credentials) {
  return function(dispatch) {
    dispatch({ type: types.START_SESSION, credentials });

    // pretend we're logging in
    setTimeout(function() {
      dispatch({ type: types.SET_SESSION_USER, user: credentials.user });
    }, 1000);
  }
}

export function endSession() {
  return { type: types.END_SESSION }
}
