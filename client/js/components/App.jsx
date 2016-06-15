import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import {IndexLink} from 'react-router'
import { connect } from 'react-redux'
import NavBar from './NavBar.jsx'
import * as SessionActions from '../actions/session'

class App extends Component {

  constructor (props) {
    super(props)
    this.props.actions.loadSession();
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="container" style={{marginTop: '40px'}}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default connect(
  _ => { return {} },
  dispatch => { return {actions: bindActionCreators(SessionActions, dispatch)} }
)(App)
