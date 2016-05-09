import { ADD_TRANSACTION, INSERT_TRANSACTION, DELETE_TRANSACTION, EDIT_TRANSACTION, UPDATE_TRANSACTION, COMPLETE_TRANSACTION, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes'

const initialState = []

export default function transactions(state = initialState, action) {
  switch (action.type) {
    case ADD_TRANSACTION:
      return [
        {
          _id: id(),
          completed: false,
          text: action.text
        },
        ...state
      ]

    case INSERT_TRANSACTION:
      return [
        action.todo,
        ...state
      ]

    case DELETE_TRANSACTION:
      return state.filter(todo =>
        todo._id !== action.id
      )

    case EDIT_TRANSACTION:
      return state.map(todo =>
        todo._id === action.id ?
          Object.assign({}, todo, { text: action.text }) :
          todo
      )

    case UPDATE_TRANSACTION:
      return state.map(todo =>
        todo._id === action.todo._id ?
          action.todo :
          todo
      )

    default:
      return state
  }
}

function id() {
  return Math.random().toString(36).substring(7);
}