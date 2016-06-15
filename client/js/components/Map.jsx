import React, { Component } from 'react'
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps"
import {Button} from 'react-bootstrap'
import conf from '../../../conf'

export default class Map extends Component {

  handleMapClick(event) {
    console.log('map click');
    const { transaction } = this.props
    const latLng = latLngFromEvent(event)
    if (transaction.clerk_state.state == 'select-source') {
      this.props.actions.editTransaction(transaction._id, {
        source: latLng,
        passenger: {
          position: latLng,
        },
      })
    } else if (transaction.clerk_state.state == 'select-destination') {
      this.props.actions.editTransaction(transaction._id, {
        destination: latLng,
      })

    }
  }

  render() {
    const { transaction } = this.props
    const passenger = transaction.passenger ? (
      <Marker
        position={transaction.passenger.position}
        icon="http://localhost:8080/images/person.png"
        title="Me"
        label="Me">
       </Marker>) : undefined

    if (!passenger) return;

    const destination = transaction.destination ? (
      <Marker
        position={transaction.destination}
        title='Destination'
        label='Destination'>
       </Marker>) : undefined

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
      <div id='map' style={{height: '350px', width: '100%'}}>
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
              defaultCenter={transaction.passenger.position}
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
