import * as types from '../constants/ActionTypes'
import * as DB from '../db'

const sessionDB = DB.get('session');

export function loadSession() {
  return (dispatch) => {
    sessionDB.get('session', function(err, session) {
      if (err) {
        dispatch({ type: types.ERROR, error: err})
      } else if (session) {
        dispatch({ type: types.SET_SESSION_USER, username: session.username})
      } else {
        dispatch({ type: types.END_SESSION })
      }
    });
  }
}

export function startSession(form, cb) {
  return (dispatch) => {
    dispatch({ type: types.START_SESSION, form });

    // pretend we're logging in
    setTimeout(() => {
      sessionDB.get('session', function(err, session) {
        if (err && err.status !== 404) {
          console.log(err)
          dispatch({ type: types.ERROR, error: err })
        } else {
          if (! session) { session = { _id: 'session' } }
          session.username = form.username
          sessionDB.put(session, function(err) {
            if (err) {
              console.log(err)
              dispatch({ type: types.ERROR, error: err })
            } else {
              dispatch({ type: types.SET_SESSION_USER, username: form.username })
              if (cb) cb()
            }
          })

        }
      })
    }, 1000);
  }
}

export function endSession() {
  return { type: types.END_SESSION }
}
