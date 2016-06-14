import { Grid, Row, Col, Image } from 'react-bootstrap'
import React, { Component } from 'react'

export default class SearchingDriver extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <Image src="/images/waiting.gif" />
            <span>Searching for a driver, please wait...</span>
          </Col>
        </Row>
      </Grid>)
  }
}