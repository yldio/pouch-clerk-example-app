import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import * as TransactionActions from '../actions/transactions'
import conf from '../../../conf'

mapboxgl.accessToken = conf.mapbox.token

export default class PickupMap extends Component {


  startMap(coords) {
    const map = new mapboxgl.Map({
      container: document.getElementById('map'),
      style: conf.mapbox.style,
      center: [coords.latitude, coords.longitude],
      zoom: 14,
    })

    map.on('load', function() {
      console.log('map loaded')
      const geojson = {
          'type': 'FeatureCollection',
          'features': [{
              'type': 'Feature',
              'geometry': {
                  'type': 'Point',
                  'coordinates': [coords.latitude, coords.longitude],
              }
          }]
      }

      map.addSource('point', {
          'type': 'geojson',
          'data': geojson,
      })

      map.addLayer({
        'id': 'point',
        'type': 'symbol',
        'source': 'point',
        'layout': {
          'icon-keep-upright': true,
          'icon-image': 'url(http://localhost:8080/images/logo.svg)',
        },
      })

      map.on('mousedown', onMouseDown, true)

      function onMouseDown(event) {
        const coords = event.lngLat
        geojson.features[0].geometry.coordinates = [coords.lng, coords.lat]
        map.getSource('point').setData(geojson)
      }
    })
  }

  componentDidMount() {

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.startMap(position.coords)
      })
    } else {
      alert('sorry, your browser does not support geolocation..')
    }
  }

  render() {
    return (
      <div id='map' style={{height: '300px', width: '100%'}}></div>
    )
  }
}
