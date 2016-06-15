import * as types from '../constants/ActionTypes'

export function setError(error) {
  return {type: types.SET_ERROR, error}
}

export function clearError() {
  return {type: types.CLEAR_ERROR}
}
