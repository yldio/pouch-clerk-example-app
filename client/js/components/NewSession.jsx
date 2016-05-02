import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Log in</h1>
        <form>
          <input name="username"></input>
          <input type="submit" value="Log in"></input>
        </form>
      </div>
    )
  }
})