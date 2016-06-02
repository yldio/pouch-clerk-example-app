import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class SyncStatus extends React.Component {

  render() {
    console.log(this.props.state)
    switch(this.props.state) {
      case 'paused':
        return (<i className='fa fa-pause'></i>)
      case 'change':
        return (<i className='fa fa-bolt'></i>)
      case 'disconnect':
      case 'reconnect':
        return (<i className='fa fa-times' style={{ color: 'red' }}></i>)
      default:
        return (<i className='fa fa-question'></i>)
    }
  }
}

function mapStateToProps(state) {
  return {
    state: state.syncState.text,
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SyncStatus)
