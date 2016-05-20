import * as types from '../constants/ActionTypes'
import * as DB from '../db'

export function addTransaction(cb) {
  const id = Date.now().toString()
  console.log('new transaction:', id)
  if (cb) { cb(id) }
  return { type: types.ADD_TRANSACTION, id }
}

export function deleteTransaction(id) {
  return { type: types.DELETE_TRANSACTION, id }
}

export function editTransaction(id, text) {
  return { type: types.EDIT_TRANSACTION, id, text }
}
