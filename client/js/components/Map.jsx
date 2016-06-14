import React, { Component } from 'react'
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps"
import {Button} from 'react-bootstrap'
import conf from '../../../conf'

export default class Map extends Component {

  handleMapClick(event) {
    const { transaction } = this.props
    if (transaction.clerk_state.state == 'select-source') {
      this.props.actions.editTransaction(transaction._id, {
        source: latLngFromEvent(event)
      })
    } else if (transaction.clerk_state.state == 'select-destination') {
      this.props.actions.editTransaction(transaction._id, {
        destination: latLngFromEvent(event)
      })

    }
  }

  // actionButton() {
  //   let button = undefined
  //   const { transaction } = this.props
  //   switch(transaction.clerk_state.state) {
  //     case 'select-source':
  //       button = transaction.source ? (
  //         <Button onClick={::this.handleSourceSelected}>Pick me up from here</Button>
  //         ) : undefined
  //       break;
  //     case 'select-destination':
  //       button = transaction.destination ? (
  //         <Button onClick={::this.handleDestinationSelected}>Drop me there</Button>
  //         ) : undefined
  //       break;
  //   }

  //   return button
  // }

  render() {
    const { transaction } = this.props
    const passenger = transaction.passenger ? (
      <Marker
        position={transaction.passenger.position}
        icon="http://localhost:8080/images/person.png"
        title="Me"
        label="Me">
       </Marker>) : undefined

    const destination = transaction.destination ? (
      <Marker
        position={transaction.destination}
        title='Destination'
        label='Destination'>
       </Marker>) : undefined

    if (!passenger) return;
    const { drivers } = transaction
    const driversMarkup = drivers ? drivers.map(driver => {
      return (
        <Marker
          position={driver.position}
          icon="http://localhost:8080/images/dragon.png"
          title={driver.name}
          label={driver.name}
          animation={google.maps.Animation.DROP}>
        </Marker>
        )
    }) : undefined

    const { driver } = transaction
    const driverMarkup = driver ? (
        <Marker
          position={driver.position}
          icon="http://localhost:8080/images/dragon.png"
          title={driver.name}
          label={driver.name}>
        </Marker>
      ) : undefined

    return (
      <div id='map' style={{height: '400px', width: '100%'}}>
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
              defaultZoom={12}
              defaultCenter={transaction.source}
              mapTypeId={google.maps.MapTypeId.SATELLITE}
              onClick={::this.handleMapClick}>
                {passenger}
                {destination}
                {driversMarkup}
                {driverMarkup}
            </GoogleMap>
          }
        ></GoogleMapLoader>
      </div>
    )
  }
}

function latLngFromEvent(event) {
  return {
    lat: event.latLng.lat(),
    lng: event.latLng.lng(),
  };
}
