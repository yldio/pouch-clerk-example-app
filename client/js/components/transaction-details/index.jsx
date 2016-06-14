import React, { Component } from 'react'
import SelectSource from './select-source'
import SelectDestination from './select-destination'
import SearchingDriver from './searching-driver'
import DriverAssigned from './driver-assigned'
import DriverEnRoute from './driver-en-route'
import DriverArrived from './driver-arrived'
import EnRoute from './en-route'
import ArrivedDestination from './arrived-destination'
import Finished from './finished'
import ServiceCompleted from './service-completed'

const stateToComponent = {
  'select-source': SelectSource,
  'select-destination': SelectDestination,
  'searching-driver': SearchingDriver,
  'driver-assigned': DriverAssigned,
  'driver-en-route': DriverEnRoute,
  'driver-arrived': DriverArrived,
  'en-route': EnRoute,
  'arrived-destination': ArrivedDestination,
  'service-completed': ServiceCompleted,
  'finished': Finished,
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

    return (<div style={{marginLeft: '15px'}}>{component}</div>)
  }
}