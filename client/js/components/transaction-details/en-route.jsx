import { Grid, Row, Col, ProgressBar } from 'react-bootstrap'
import React, { Component } from 'react'
import Moment from 'moment'
import Driver from './Driver'
import geo from '../../../../lib/geo'

export default class EnRoute extends Component {

  render() {
    const { transaction } = this.props
    const fullDistance = geo.distance(transaction.source, transaction.destination)
    const currentDistance = geo.distance(transaction.passenger.location, transaction.destination)
    const progress = currentDistance / fullDistance
    return (
      <Grid>
        <Row>
          <Col sm={9} md={9}>
            <h3>On your way</h3>
            <ProgressBar now={progress} />
            <p>ETA: {Moment(Date.now() + transaction.eta_destination).fromNow()}.</p>
          </Col>
          <Col sm={3} md={3}>
            <Driver transaction={this.props.transaction} />
          </Col>
        </Row>
      </Grid>)
  }
}