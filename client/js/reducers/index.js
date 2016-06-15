import { combineReducers } from 'redux'
import transactions from './transactions'
import session from './session'
import syncState from './syncState'
import error from './error'

export default combineReducers({
  transactions, session, syncState, error
})
