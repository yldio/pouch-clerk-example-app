import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TransactionActions from '../actions/transactions'
import Map from './Map'
import TransactionDetails from './transaction-details/index.jsx'

class Transaction extends React.Component {

  renderState() {
    let { transaction } = this.props
    if (transaction.clerk_state) {
      return (<span>{transaction.clerk_state.state}</span>)
    } else {
      return (<span>Unknown</span>)
    }
  }

  render() {
    const { transaction, actions } = this.props
    if (transaction) {
      return (
        <div>
          <Map transaction={transaction} actions={actions}/>
          <TransactionDetails transaction={transaction} actions={actions}/>
          <pre><code>{JSON.stringify(transaction, null, '\t')}</code></pre>
        </div>
      )
    } else {
      return (<div><p>Not found</p></div>)
    }
  }
}

export default connect(
  (state, props) => {
    return { transaction: state.transactions.find(withId(props.params.id)) }
  },
  (dispatch) => {
    return {
      actions: bindActionCreators(TransactionActions, dispatch)
    }
  }
)(Transaction)

function withId(id) {
  return function(transaction) {
    return transaction._id === id
  }
}