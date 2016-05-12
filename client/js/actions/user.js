import * as types from '../constants/ActionTypes'

export function startSession(form, cb) {
  console.log('start session:', form);
  return (dispatch) => {
    dispatch({ type: types.START_SESSION, form });

    // pretend we're logging in
    setTimeout(() => {
      dispatch({ type: types.SET_SESSION_USER, user: form.username });
      if (cb) cb();
    }, 1000);
  }
}

export function endSession() {
  return { type: types.END_SESSION }
}
