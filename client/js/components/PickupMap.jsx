import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import * as TransactionActions from '../actions/transactions'
import conf from '../../../conf'

mapboxgl.accessToken = conf.mapbox.token

export default class PickupMap extends Component {


  componentDidMount() {

    const map = new mapboxgl.Map({
      container: document.getElementById('map'),
      style: conf.mapbox.style,
      center: [-73.9749, 40.7736],
      zoom: 14,
    })

    map.on('load', function() {
      console.log('map loaded')

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
        console.log('mouse down at', event.lngLat)
        const coords = event.lngLat
        geojson.features[0].geometry.coordinates = [coords.lng, coords.lat];
        map.getSource('point').setData(geojson);
      }
    })
  }

  render() {
    return (
      <div id="map" style={{height: '300px', width: '100%'}}></div>
    )
  }
}
