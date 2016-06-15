import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class SyncStatus extends React.Component {

  render() {
    var symbol;
    switch(this.props.state.sync) {
      case 'paused':
        symbol = (<i className='fa fa-pause'></i>)
        break;
      case 'change':
        symbol = (<i className='fa fa-bolt'></i>)
        break;
      case 'error':
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
  state => { return { state: state.syncState } }
)(SyncStatus)
