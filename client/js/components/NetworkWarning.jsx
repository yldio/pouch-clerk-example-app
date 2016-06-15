import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'

const importantStates = ['connect', 'disconnect']

export default class NetworkWarning extends Component {

  render() {
    console.log('propos:', this.props)
    const { syncState } = this.props
    if (importantStates.indexOf(syncState.text) >= 0) {
      return (
        <Alert
          bsStyle="warning">
          <p>{syncState.text}</p>
        </Alert>
      )
    } else return (<div></div>);
  }
}
