import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'

export default class Error extends Component {

  handleDismiss() {
    this.props.actions.clearError()
  }

  render() {
    const { error } = this.props.error
    if (error) {
      console.log('error:', error)
      return (
        <Alert
          bsStyle="danger"
          onDismiss={::this.handleDismiss}>
          <h4>Error</h4>
          <p>{error.message}</p>
        </Alert>
      )
    }
    return (<div></div>)
  }
}
