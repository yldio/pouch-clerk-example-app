import { Grid, Row, Col, Thumbnail } from 'react-bootstrap'
import React, { Component } from 'react'
import Moment from 'moment'
import Driver from './Driver'

export default class DriverEnRoute extends Component {

  render() {
    const { transaction } = this.props
    return (
      <Grid>
        <Row>
          <Col sm={9} md={9}>
            <h3>Driver en route</h3>
            <p>Driver ETA: {Moment(Date.now() + transaction.eta_pickup).fromNow()}.</p>
          </Col>
          <Col sm={3} md={3}>
            <Driver transaction={this.props.transaction} />
          </Col>
        </Row>
      </Grid>)
  }
}