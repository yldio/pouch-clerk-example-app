import { Modal, Button, DropdownButton, MenuItem } from 'react-bootstrap'
import React, { Component } from 'react'

export default class SelectPaymentMethod extends Component {

  handleSelectPaymentMethod(paymentMethod) {
    this.props.actions.editTransaction(this.props.transaction._id, {
      payment_method: paymentMethod
    })
  }

  handlePaymentMethodConfirmed() {
    this.props.actions.setTransactionState(this.props.transaction._id, 'searching-driver')
  }

  // handleDestinationSelected() {
  //   this.props.actions.setTransactionState(this.props.transaction._id, 'searching-driver')
  // }

  render() {
    const { transaction } = this.props
    const { cost_estimate } = transaction
    const paymentMethods = transaction.payment_methods.map(paymentMethod => {
      return (
        <MenuItem
          key={paymentMethod}
          eventKey={paymentMethod}
            >{paymentMethod}</MenuItem>
        )
    })
    return (
      <Modal.Dialog>

        <Modal.Header>
          <Modal.Title>Select payment method</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>The estimate for your trip is <en>{cost_estimate.value} {cost_estimate.currency}</en>.</p>
          <p>
            <label>Please select a payment method:</label>
            &nbsp;
            <DropdownButton
            id="select-payment-method"
            title={transaction.payment_method || 'select'}
            onSelect={::this.handleSelectPaymentMethod}
            >{paymentMethods}</DropdownButton>
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button
            bsStyle="primary"
            disabled={!transaction.payment_method}
            onClick={::this.handlePaymentMethodConfirmed}
            >Confirm Payment Method</Button>
        </Modal.Footer>

      </Modal.Dialog>
      )
  }
}