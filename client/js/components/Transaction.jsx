import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

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
    let { transaction } = this.props
    console.log('props:', this.props)
    if (transaction) {
      return (
        <div>
          <h1>Transaction #{transaction._id}</h1>
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
  }
)(Transaction)

function withId(id) {
  return function(transaction) {
    return transaction._id === id
  }
}