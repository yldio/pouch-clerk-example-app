import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Link} from 'react-router'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Button} from 'react-bootstrap'
import * as UserActions from '../actions/user'

class NavBar extends React.Component {

  onLogOut(event) {
    const { router } = this.context
    event.preventDefault()
    this.props.actions.endSession()
    router.push({pathname: '/'})
  }

  render() {

    const { session } = this.props

    const greeting = session.state == 'logged out' ?
      (<NavItem eventKey={1} href="/session/new">Log in</NavItem>) :
      (
        <NavItem eventKey={1}>
          Hello {session.username}&nbsp;
          <Button style={{'margin-left': '1em'}} bsSize="xsmall" onClick={::this.onLogOut}>Log out</Button>
          </NavItem>
          )

    const privateLinks = session.state == 'logged in' && (
        <Nav>
          <NavItem eventKey={1} href="/transactions/new">New Transaction</NavItem>
        </Nav>
      )

    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>Uber for Taxis</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {privateLinks}
          <Nav pullRight>
            {greeting}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }

}

NavBar.contextTypes = {
  router: PropTypes.object
}

function mapStateToProps(state) {
  return {
    session: state.session,
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
)(NavBar)
