import { SET_ERROR, CLEAR_ERROR } from '../constants/ActionTypes'

const initialState = {
  error: undefined
}

export default function syncState(state = initialState, action) {
  switch (action.type) {
    case SET_ERROR:
      return { error: { message: action.error.message } }

    case CLEAR_ERROR:
      return { error: undefined }

    default:
      return state
  }
}
