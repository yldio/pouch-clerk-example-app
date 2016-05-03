import React from 'react'

export default React.createClass({

  // ask for `router` from context
  contextTypes: {
    router: React.PropTypes.object
  },

  handleSubmit(event) {
    event.preventDefault()
    this.context.router.push('/transactions/new')
  },

  render() {
    return (
      <div>
        <h1>Log in</h1>
        <form onSubmit={this.handleSubmit}>
          <input name="username"></input>
          <input type="submit" value="Log in"></input>
        </form>
      </div>
    )
  }
})