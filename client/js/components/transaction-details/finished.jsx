import { Grid, Row, Col, Thumbnail } from 'react-bootstrap'
import React, { Component } from 'react'
import Moment from 'moment'
import Driver from './Driver'

export default class Finished extends Component {

  render() {
    const { transaction } = this.props
    const { time, cost } = transaction
    const metrics = {
      you_waited: diff(time.started, time.driver_arrived),
      driver_waited: diff(time.driver_arrived, time.pickup),
      trip: diff(time.pickup, time.arrived),
      cost: `${cost.value} ${cost.currency}`
    }
    return (
      <Grid>
        <Row>
          <Col sm={9} md={9}>
            <h3>Your trip has finished</h3>
            <p>You <b>waited {metrics.you_waited}</b> for a dragon to arrive.</p>
            <p>{transaction.driver.name} <b>waited {metrics.driver_waited}</b> for you at the pickup spot.</p>
            <p>{transaction.driver.name} <b>took {metrics.trip}</b> to get you to your destination.</p>
            <p>Your trip costed you <b>{metrics.cost}</b>.</p>
          </Col>
          <Col sm={3} md={3}>
            <Driver transaction={this.props.transaction} />
          </Col>
        </Row>
      </Grid>)
  }
}

function diff(from, to) {
  return Moment.duration(to - from).humanize()
}