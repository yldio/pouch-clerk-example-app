import { combineReducers } from 'redux'
import transactions from './transactions'
import session from './session'
import syncState from './syncState'

export default combineReducers({
  transactions, session, syncState
})
