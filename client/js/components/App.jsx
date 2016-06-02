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
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SessionActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
