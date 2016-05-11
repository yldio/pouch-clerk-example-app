export default function(session) {
  var user

  return function(options) {
    return function(next) {
      return function(action) {
        const returnValue = next(action)
        const newState = options.getState()
        if (newState.session.user !== user) {
          user = newState.session.user
          if (user) {
            session.emit('new', user);
          } else {
            session.emit('delete');
          }
        }

        return returnValue
      }
    }
  }
}