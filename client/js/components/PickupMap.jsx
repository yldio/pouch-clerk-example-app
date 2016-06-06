import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import * as TransactionActions from '../actions/transactions'
import mapboxgl from 'mapbox-gl';
import conf from '../../../conf'

mapboxgl.accessToken = conf.mapbox.token

export default class PickupMap extends Component {

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v8',
      center: [-74.50, 40],
      zoom: 9,
    })
  }

  render() {
    return (
      <div id="map"></div>
    )
  }
}
