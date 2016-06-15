import { Grid, Row, Col, Thumbnail } from 'react-bootstrap'
import React, { Component } from 'react'
import Driver from './Driver'

export default class ArrivedDestination extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <Col sm={9} md={9}>
            <h3>Arrived destination</h3>
          </Col>
          <Col sm={3} md={3}>
            <Driver transaction={this.props.transaction} />
          </Col>
        </Row>
      </Grid>)
  }
}