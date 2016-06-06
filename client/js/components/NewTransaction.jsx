import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import * as TransactionActions from '../actions/transactions'
import { PageHeader, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import PickupMap from './PickupMap'

class NewTransaction extends Component {

  beginTransaction(event) {
    event.preventDefault()
    this.props.actions.addTransaction((id) => {
      this.context.router.push({pathname: `/transactions/${id}`})
    })
  }

  render() {
    return (
      <div>
        <PageHeader>New Transaction</PageHeader>
        <form onSubmit={::this.beginTransaction}>
          <FormGroup>
            <PickupMap />
            <ControlLabel>Where do you want to be picked up?</ControlLabel>
            <FormControl.Feedback />
          </FormGroup>
          <Button onClick={::this.beginTransaction}>Begin Transaction</Button>
        </form>
      </div>
    )
  }
}

// ask for `router` from context
NewTransaction.contextTypes = {
  router: PropTypes.object
}

function mapStateToProps(state) {
  return {
    username: state.username,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TransactionActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTransaction)
