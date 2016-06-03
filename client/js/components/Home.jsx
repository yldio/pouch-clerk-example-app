import React from 'react'
import {Link} from 'react-router'
import {Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as SessionActions from '../actions/session'

class Home extends React.Component {

  onLogout(event) {
    this.props.actions.endSession()
  }

  render() {
    const logLink = (this.props.sessionState === 'logged out') ?
      (<p><Link to="/session/new">Log in</Link></p>) :
      (<Button onClick={::this.onLogout}>Log out</Button>)

    return (
      <div>
        <center style={{marginTop: '60px'}}>
          <img src="/images/logo.svg" height="300px"></img>
          <h1>Dragon Drop</h1>
          <h2>Because Flying Beats Driving Any Time™</h2>
          {logLink}
        </center>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    sessionState: state.session.state,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SessionActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
