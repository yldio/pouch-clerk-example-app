export default function(session) {
  var username

  return function(options) {
    return function(next) {
      return function(action) {
        const returnValue = next(action)
        const newState = options.getState()
        console.log('new state.session.user:', newState.session)
        if (newState.session.username !== username) {
          username = newState.session.username
          console.log('user:', username)
          if (username) {
            session.emit('new', username);
          } else {
            session.emit('delete');
          }
        }

        return returnValue
      }
    }
  }
}