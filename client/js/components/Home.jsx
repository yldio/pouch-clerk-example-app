import React, { PropTypes } from 'react'
import {Link} from 'react-router'
import {Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as SessionActions from '../actions/session'
import * as TransactionActions from '../actions/transactions'

class Home extends React.Component {

  onLogout(event) {
    event.preventDefault()
    this.props.sessionActions.endSession()
  }

  onStartTransaction(event) {
    event.preventDefault()
    this.props.transactionActions.addTransaction(id => {
      this.context.router.push({pathname: `/transactions/${id}`})
    })
  }

  render() {
    const startLink = (this.props.sessionState === 'logged out') ? undefined :
      (
        <Button
          bsStyle="primary"
          bsSize="large"
          block
          onClick={::this.onStartTransaction}>Request Dragon</Button>)

    const logLink = (this.props.sessionState === 'logged out') ?
      (<p><Link to="/session/new">Log in</Link></p>) : undefined

    return (
      <div>
        <center style={{marginTop: '60px'}}>
          <img src="/images/logo.svg" height="300px"></img>
          <h1>Dragon Drop</h1>
          <h2>Because Flying Beats Driving Any Time™</h2>
          {startLink}
          {logLink}
        </center>
      </div>
    )
  }
}

// ask for `router` from context
Home.contextTypes = {
  router: PropTypes.object
}

function mapStateToProps(state) {
  return { sessionState: state.session.state }
}

function mapDispatchToProps(dispatch) {
  return {
    sessionActions: bindActionCreators(SessionActions, dispatch),
    transactionActions: bindActionCreators(TransactionActions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
