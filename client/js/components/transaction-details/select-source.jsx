import { Grid, Row, Col, Button } from 'react-bootstrap'
import React, { Component } from 'react'

export default class SelectSource extends Component {

  handleSourceSelected() {
    this.props.actions.setTransactionState(this.props.transaction._id, 'select-destination')
  }

  // handleDestinationSelected() {
  //   this.props.actions.setTransactionState(this.props.transaction._id, 'searching-driver')
  // }

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            <Button
              bsSize="large"
              block
              bsStyle="primary"
              onClick={::this.handleSourceSelected}>
                Pick me up from selected point
            </Button>
          </Col>
        </Row>
      </Grid>)
  }
}