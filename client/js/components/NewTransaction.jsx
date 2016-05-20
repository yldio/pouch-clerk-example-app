import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import * as TransactionActions from '../actions/transactions'
import {PageHeader} from 'react-bootstrap'

class NewTransaction extends Component {

  beginTransaction(event) {
    event.preventDefault()
    this.props.actions.addTransaction((id) => {
      console.log('new transaction:', id)
      this.context.router.push({pathname: `/transactions/${id}`})
    })
  }

  render() {
    return (
      <div>
        <PageHeader>New Transaction</PageHeader>
        <button onClick={::this.beginTransaction}>Begin Transaction</button>
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
