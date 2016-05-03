import React from 'react'
import {IndexLink} from 'react-router'
import NavBar from './NavBar.jsx'

export default React.createClass({
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
})