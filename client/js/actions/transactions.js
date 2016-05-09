import * as types from '../constants/ActionTypes'

export function addTransaction(text) {
  return { type: types.ADD_TRANSACTION, text }
}

export function deleteTransaction(id) {
  return { type: types.DELETE_TRANSACTION, id }
}

export function editTransaction(id, text) {
  return { type: types.EDIT_TRANSACTION, id, text }
}
