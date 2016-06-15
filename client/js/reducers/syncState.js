import { SET_SYNC_STATE } from '../constants/ActionTypes'

const initialState = {
  client: 'unknown',
  sync: 'unknown',
}

export default function syncState(state = initialState, action) {
  switch (action.type) {
    case SET_SYNC_STATE:
      return Object.assign({
        client: state.client,
        sync: state.unknown,
      }, action);

    default:
      return state
  }
}
