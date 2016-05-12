import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import * as UserActions from '../actions/user'

class NewSession extends Component {

  constructor (props) {
    super(props)
    this.state = { username: null }
  }

  handleInputChange (event) {
    console.log('input change');
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    const { actions } = this.props
    const { router } = this.context
    event.preventDefault()
    this.props.actions.startSession(this.state, () => {
      router.push({}, '/transactions/new')
    })
  }

  render() {
    return (
      <div>
        <h1>Log in</h1>
        <form
          onSubmit={::this.handleSubmit}
          onChange={::this.handleInputChange}
          >
          <input type="email" name="username"></input>
          <button type="submit"
            className="pure-button pure-button-primary"
            >Login</button>
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
    username: state.username,
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
