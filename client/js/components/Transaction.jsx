import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Transaction extends React.Component {
  render() {
    let { transaction } = this.props
    console.log('props:', this.props)
    if (transaction) {
      return (
        <div>
          <h1>Transaction #{transaction._id}</h1>
          <p>Completed: {transaction.completed ? 'true' : 'false'}</p>
        </div>
      )
    } else {
      return (<div><p>Not found</p></div>)
    }
  }
}

function mapStateToProps(state, props) {
  return {
    transaction: state.transactions.find(withId(props.params.id)),
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transaction)

function withId(id) {
  return function(transaction) {
    return transaction._id === id
  }
}