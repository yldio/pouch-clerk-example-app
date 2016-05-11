import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import * as UserActions from '../actions/user'

class NewSession extends Component {

  handleSubmit(event) {
    const { actions } = this.props
    event.preventDefault()
    const username = event.target.children[0].value
    console.log('username:', username)
    console.log(this)
    if (username) {
      this.props.actions.startSession({user: username})
    }
  }

  render() {
    return (
      <div>
        <h1>Log in</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input name="username"></input>
          <input type="submit" value="Log in"></input>
        </form>
      </div>
    )
  }
}

// ask for `router` from context
NewSession.contextTypes = {
  router: PropTypes.object
}

function mapStateToProps(state) {
  return {
    user: state.user,
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
)(NewSession)
