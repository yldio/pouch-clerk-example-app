import * as types from './constants/ActionTypes'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import PouchSyncTransactionsMiddleware from './middlewares/pouch-sync-transactions'
import PouchLoginMiddleware from './middlewares/pouch-login'
import EventEmitter from 'events'

const initialState = {
  user: undefined,
  transactions: [],
  syncState: {
    text: 'unknown'
  }
}

export default function configureStore() {
  const session = new EventEmitter()
  const middleware = applyMiddleware(PouchSyncTransactionsMiddleware(session), PouchLoginMiddleware(session))
  const createStoreWithMiddleware = middleware(createStore)
  return createStoreWithMiddleware(rootReducer, initialState)
}
