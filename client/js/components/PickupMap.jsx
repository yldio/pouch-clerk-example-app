import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import * as TransactionActions from '../actions/transactions'
import conf from '../../../conf'

mapboxgl.accessToken = conf.mapbox.token

export default class PickupMap extends Component {


  startMap(position) {
    const map = new mapboxgl.Map({
      container: document.getElementById('map'),
      style: conf.mapbox.style,
      center: [position.coords.latitude, position.coords.longitude],
      zoom: 14,
    })

    map.on('load', function() {
      const geojson = {
          "type": "FeatureCollection",
          "features": [{
              "type": "Feature",
              "geometry": {
                  "type": "Point",
                  "coordinates": [0, 0]
              }
          }]
      };

      map.addSource('point', {
          "type": "geojson",
          "data": geojson,
      })

      map.addLayer({
        "id": "point",
        "type": "circle",
        "source": "point",
        "paint": {
          "circle-radius": 10,
          "circle-color": "#3887be",
        },
      })

      map.on('mousedown', onMouseDown, true)

      function onMouseDown(event) {
        const coords = event.lngLat
        geojson.features[0].geometry.coordinates = [coords.lng, coords.lat];
        map.getSource('point').setData(geojson);
      }
    })
  }

  componentDidMount() {

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.startMap(position)
      })
    } else {
      alert('sorry, your browser does not support geolocation..')
    }
  }

  render() {
    return (
      <div id="map" style={{height: '300px', width: '100%'}}></div>
    )
  }
}
