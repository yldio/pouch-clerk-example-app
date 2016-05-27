import React from 'react'
import {Link} from 'react-router'
import {Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UserActions from '../actions/user'

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
        <h1>Home</h1>
        {logLink}
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
    actions: bindActionCreators(UserActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
