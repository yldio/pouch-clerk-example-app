import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'

const importantStates = ['disconnect', 'reconnect']

export default class NetworkWarning extends Component {

  render() {
    const { client } = this.props.syncState
    if (importantStates.indexOf(client) >= 0) {
      return (
        <Alert
          bsStyle="warning">
          <p>Disconnected from sync service. Trying to reconnect...</p>
        </Alert>
      )
    } else return (<div></div>);
  }
}
