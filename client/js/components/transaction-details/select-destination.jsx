import { Grid, Row, Col, Button } from 'react-bootstrap'
import React, { Component } from 'react'

export default class SelectDestination extends Component {

  handleDestinationSelected() {
    this.props.actions.setTransactionState(this.props.transaction._id, 'get-estimate')
  }

  render() {
    const { transaction } = this.props
    const buttonText = transaction.destination ?
      'Set destination' :
      'Select destination from map'

    return (
      <Grid>
        <Row>
          <Col>
            <Button
              bsSize="large"
              bsStyle="primary"
              block
              disabled={!transaction.destination}
              onClick={::this.handleDestinationSelected}>
              {buttonText}
            </Button>
          </Col>
        </Row>
      </Grid>)
  }
}