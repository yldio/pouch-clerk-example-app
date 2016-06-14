import React, { Component } from 'react'
import SelectSource from './select-source'
import SelectDestination from './select-destination'
import SearchingDriver from './searching-driver'

const stateToComponent = {
  'select-source': SelectSource,
  'select-destination': SelectDestination,
  'searching-driver': SearchingDriver,
}

export default class TransactionDetails extends Component {
  render() {
    const { transaction } = this.props
    let component
    if (transaction && transaction.clerk_state) {
      const ComponentClass = stateToComponent[transaction.clerk_state.state]
      if (ComponentClass) {
        component = <ComponentClass {... this.props} />
      }
    }

    return (<div style={{marginLeft: '20px'}}>{component}</div>)
  }
}