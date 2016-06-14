import * as types from '../constants/ActionTypes'
import * as DB from '../db'

export function addTransaction(cb) {
  return function(dispatch) {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const { coords } = position
        const transaction = {
          clerk_state: {
            state: 'select-source'
          },
          passenger: {
            position: {lat: coords.latitude, lng: coords.longitude}
          },
          source: {lat: coords.latitude, lng: coords.longitude}
        }

        const id = Date.now().toString()
        if (cb) { cb(id) }
        dispatch({ type: types.ADD_TRANSACTION, id, props: transaction })
      });
    } else {
      dispatch({type: types.ERROR, message: 'No geolocation'})
    }
  }
}

export function setTransactionState(id, state) {
  return {type: types.SET_TRANSACTION_STATE, id, state}
}

export function deleteTransaction(id) {
  return { type: types.DELETE_TRANSACTION, id }
}

export function editTransaction(id, props) {
  return { type: types.EDIT_TRANSACTION, id, props }
}
