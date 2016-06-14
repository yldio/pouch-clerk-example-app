import { Grid, Row, Col, Thumbnail } from 'react-bootstrap'
import React, { Component } from 'react'
import Driver from './Driver'

export default class DriverEnRoute extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <Col sm={18} md={9}>
            <h3>Driver en route</h3>
          </Col>
          <Col sm={6} md={3}>
            <Driver transaction={this.props.transaction} />
          </Col>
        </Row>
      </Grid>)
  }
}