import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class SyncStatus extends React.Component {

  render() {
    var symbol;
    console.log(this.props.state)
    switch(this.props.state) {
      case 'paused':
        symbol = (<i className='fa fa-pause'></i>)
        break;
      case 'change':
        symbol = (<i className='fa fa-bolt'></i>)
        break;
      case 'disconnect':
      case 'reconnect':
        symbol = (<i className='fa fa-times' style={{ color: 'red' }}></i>)
        break;
      default:
        symbol = (<i className='fa fa-question'></i>)
        break
    }

    return (<div style={{width: '2em'}}>{symbol}</div>)
  }
}

export default connect(
  state => { return { state: state.syncState.text } }
)(SyncStatus)
