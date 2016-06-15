import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import {IndexLink} from 'react-router'
import { connect } from 'react-redux'
import NavBar from './NavBar.jsx'
import Error from './Error.jsx'
import * as SessionActions from '../actions/session'
import * as ErrorActions from '../actions/error'

class App extends Component {

  constructor (props) {
    super(props)
    this.props.actions.loadSession();
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="container" style={{marginTop: '55px'}}>
          <Error error={this.props.error} actions={this.props.errorActions} />
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default connect(
  state => { return { error: state.error } },
  dispatch => {
    return {
      actions: bindActionCreators(SessionActions, dispatch),
      errorActions: bindActionCreators(ErrorActions, dispatch),
    }
  }
)(App)
