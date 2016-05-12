import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {IndexLink} from 'react-router'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import * as UserActions from '../actions/user'

class NavBar extends React.Component {

  render() {

    const { session } = this.props

    const greeting = session.state == 'logged out' ?
      (<NavItem eventKey={1} href="/session/new">Log in</NavItem>) :
      (<NavItem eventKey={1}>Hello {session.username}</NavItem>)

    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Pouch Clerk Example App</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/transactions/new">New Transaction</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={1} href="/transactions/new">New Transaction</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={1} href="/session/new">Log in</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            {greeting}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }

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
