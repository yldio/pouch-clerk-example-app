'use strict';

// en-route

const travelTicks = 10;
const arrivedMinimumDistance = 0.001;

module.exports = function(doc, next) {
  setTimeout(() => {
    if (! doc.driver || ! doc.driver.position) return next(new Error('no driver position'));

    if (! doc.driver.speed) {
      const dstc = diffLatLong(doc.driver.position, doc.destination)
      doc.driver.speed = {
        lat: dstc.lat / travelTicks,
        lng: dstc.lng / travelTicks,
      };
    }

    doc.driver.position.lat += doc.driver.speed.lat
    doc.driver.position.lng += doc.driver.speed.lng

    if (! doc.passenger) {
      doc.passenger = {}
    }

    doc.passenger.position = doc.driver.position

    var distanceAfter = Math.abs(distance(doc.driver.position, doc.destination));

    doc.distance = distanceAfter

    const absSpeed = distance(doc.driver.speed)
    doc.eta_destination = 1000 * doc.distance / absSpeed

    if (distanceAfter < arrivedMinimumDistance) {
      if (! doc.time) {
        doc.time = {}
      }
      doc.time.arrived = Date.now()
      next(null, 'arrived-destination');
    } else {
      next(null, 'en-route', true);
    }
  }, 1000)}

  function diffLatLong(from, to) {
    return {
      lat: to.lat - from.lat,
      lng: to.lng - from.lng,
    }
  }

  function distance(from, to) {
    if (! to) {
      to = {
        lat: 0,
        lng: 0,
      }
    }
    const vec = diffLatLong(from, to)
    return Math.sqrt(Math.pow(vec.lat, 2) + Math.pow(vec.lng, 2));
  }
