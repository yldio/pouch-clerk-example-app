import { Thumbnail } from 'react-bootstrap'
import React, { Component } from 'react'
import Moment from 'Moment'

export default class Driver extends Component {

  arrivalTime() {
    const { transaction } = this.props
    const { state } = transaction.clerk_state
    if (state == 'driver-en-route') {
      return (<p>Estimated arrival time: {Moment(new Date(Date.now() + transaction.eta_pickup)).fromNow()}</p>)
    } else if (state == 'en-route') {
      return (<p>Estimated arrival time: {Moment(new Date(Date.now() + transaction.eta_destination)).fromNow()}</p>)
    }
  }

  render() {
    const { transaction } = this.props
    return (
      <div>
        <h4>Your dragon</h4>
        <Thumbnail src="/images/dragon-face.jpg">
          <h4>{transaction.driver.name}</h4>
          {this.arrivalTime()}
        </Thumbnail>
      </div>)
  }
}