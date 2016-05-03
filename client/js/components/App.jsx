import React from 'react'
import {IndexLink} from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <div class="navbar">
          <IndexLink to="/">Home</IndexLink>
        </div>
        {this.props.children}
      </div>
    )
  }
})