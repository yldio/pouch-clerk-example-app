import React from 'react'
import {IndexLink} from 'react-router'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'

export default React.createClass({

  render() {
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
            <NavItem eventKey={1} href="/session/new">Log in</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }

})