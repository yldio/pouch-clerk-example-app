import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps"
import * as TransactionActions from '../actions/transactions'
import conf from '../../../conf'

class Map extends Component {

  handleMapClick(event) {

  }

  map(coords) {

  }

  render() {
    // if ('geolocation' in navigator) {
    //     navigator.geolocation.getCurrentPosition(position => {
    //       return this.map(position.coords)
    //     })
    //   } else {
    //     return (<p>Sorry, but geo localization is not (yet?) accessible to me.. :(</p>)
    //   }
    // }

    const { transaction } = this.props
    const person = transaction.pickup ? (
      <Marker
        position={transaction.pickup}
        icon="http://localhost:8080/images/person.png">
       </Marker>) : undefined

    const { drivers } = this.props
    const driversMarkup = drivers ? drivers.map(driver => {
      return (
        <Marker
          position={driver.position}
          icon="http://localhost:8080/images/dragon.png" />
        )
    }) : undefined

    if (!person) return;
    return (
      <div id='map' style={{height: '300px', width: '100%'}}>
        <GoogleMapLoader
          containerElement={
            <div
              {...this.props.containerElementProps}
              style={{
                height: "100%",
              }}></div>
          }
          googleMapElement={
            <GoogleMap
              ref={(map) => console.log(map)}
              defaultZoom={12}
              defaultCenter={transaction.pickup}
              onClick={::this.handleMapClick}>
                {person}
                {driversMarkup}
            </GoogleMap>
          }
        />
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TransactionActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)
