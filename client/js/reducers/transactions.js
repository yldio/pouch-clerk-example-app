import {
  ADD_TRANSACTION,
  INSERT_TRANSACTION,
  DELETE_TRANSACTION,
  EDIT_TRANSACTION,
  UPDATE_TRANSACTION,
  SET_TRANSACTION_STATE } from '../constants/ActionTypes'

const initialState = []

export default function transactions(state = initialState, action) {
  switch (action.type) {
    case ADD_TRANSACTION:
      return [
        Object.assign({
          _id: action.id,
          time: {
            started: Date.now(),
          },
        }, action.props),
        ...state
      ]

    case INSERT_TRANSACTION:
      return [
        action.transaction,
        ...state
      ]

    case DELETE_TRANSACTION:
      return state.filter(transaction =>
        transaction._id !== action.id
      )

    case EDIT_TRANSACTION:
      var ns = state.map(transaction =>
        transaction._id === action.id ?
          Object.assign({}, transaction, action.props) :
          transaction
      )

      console.log('ns:', ns);

      return ns;

    case UPDATE_TRANSACTION:
      return state.map(transaction =>
        transaction._id === action.transaction._id ?
          action.transaction :
          transaction
      )

    case SET_TRANSACTION_STATE:
      return state.map(transaction =>
        transaction._id === action.id ?
          Object.assign({}, transaction, {
            clerk_state: Object.assign({}, transaction.clerk_state, {state: action.state})
          }) : transaction
      )

    default:
      return state
  }
}

function id() {
  return Math.random().toString(36).substring(7);
}