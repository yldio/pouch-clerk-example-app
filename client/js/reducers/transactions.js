import { ADD_TRANSACTION, INSERT_TRANSACTION, DELETE_TRANSACTION, EDIT_TRANSACTION, UPDATE_TRANSACTION, COMPLETE_TRANSACTION, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes'

const initialState = []

export default function transactions(state = initialState, action) {
  switch (action.type) {
    case ADD_TRANSACTION:
      console.log('adding transaction...')
      return [
        {
          _id: action.id,
          completed: false
        },
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
      return state.map(transaction =>
        transaction._id === action.id ?
          Object.assign({}, transaction, { text: action.text }) :
          transaction
      )

    case UPDATE_TRANSACTION:
      return state.map(transaction =>
        transaction._id === action.transaction._id ?
          action.transaction :
          transaction
      )

    default:
      return state
  }
}

function id() {
  return Math.random().toString(36).substring(7);
}