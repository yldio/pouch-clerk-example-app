import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Link} from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Button} from 'react-bootstrap'
import * as SessionActions from '../actions/session'
import SyncStatus from './SyncStatus'

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
      (
        <NavItem>
          <LinkContainer to={{ pathname: '/session/new' }}>
            <Button bsSize="xs">Log in</Button>
          </LinkContainer>
        </NavItem>
      )
        :
      (
        <NavItem eventKey={1}>
          Hello {session.username}&nbsp;
          <Button style={{ marginLeft: '1em' }} bsSize="xsmall" onClick={::this.onLogOut}>Log out</Button>
        </NavItem>
      )

    const privateLinks = session.state == 'logged in' && (
        <Nav>
          <LinkContainer to={{ pathname: '/transactions/new' }}>
            <NavItem eventKey={1} href="/transactions/new">New Transaction</NavItem>
          </LinkContainer>
        </Nav>
      )

    return (
      <Navbar inverse fixedTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <Navbar.Text style={{margin: 0, marginTop: '-7px'}}><Link to='/'><img src="/images/logo.svg" style={{height: '40px'}}/></Link></Navbar.Text>
            <Link to='/'>Dragon Drop</Link>
          </Navbar.Brand>
        </Navbar.Header>
        {privateLinks}
        <Nav pullRight>
          {greeting}
          <NavItem><SyncStatus></SyncStatus></NavItem>
        </Nav>
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
    actions: bindActionCreators(SessionActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)
