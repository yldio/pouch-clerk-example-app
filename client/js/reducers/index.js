import { combineReducers } from 'redux'
import transactions from './transactions'
import user from './user'
import syncState from './syncState'

export default combineReducers({
  transactions, user, syncState
})
