'use strict';

// driver-en-route

const travelTicks = 10;
const arrivedMinimumDistance = 50;

module.exports = function(doc, next) {
  setTimeout(() => {
    if (! doc.driver || ! doc.driver.position) return next(new Error('no driver position'));
    const dstc = diffLatLong(doc.source, doc.driver.position)
    console.log('dstc:', dstc);

    doc.driver.position.lat -= dstc.lat / travelTicks
    doc.driver.position.lng -= dstc.lng / travelTicks

    var distanceAfter = Math.abs(distance(doc.driver.position, doc.source));
    console.log('distance: ', distanceAfter);

    doc.distance = distanceAfter

    if (distanceAfter < arrivedMinimumDistance) {
      if (! doc.time) {
        doc.time = {}
      }
      doc.time.driver_arrived = Date.now()
      next(null, 'driver-arrived');
    } else {
      next(null, 'driver-en-route', true);
    }
  }, 1000)
}

function diffLatLong(from, to) {
  return {
    lat: to.lat - from.lat,
    lng: to.lng - from.lng,
  }
}

function distance(pos) {
  return Math.sqrt(Math.pow(pos.lat, 2) + Math.pow(pos.lng, 2));
}