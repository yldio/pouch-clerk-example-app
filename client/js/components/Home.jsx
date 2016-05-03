import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p><Link to="/session/new">Log in</Link></p>
      </div>
    )
  }
})
