'use strict';

// driver-en-route

const travelTicks = 10;
const arrivedMinimumDistance = 0.001;

module.exports = function(doc, next) {
  setTimeout(() => {
    if (! doc.driver || ! doc.driver.position) return next(new Error('no driver position'));

    if (! doc.driver.speed) {
      const dstc = diffLatLong(doc.source, doc.driver.position)
      doc.driver.speed = {
        lat: dstc.lat / travelTicks,
        lng: dstc.lng / travelTicks,
      };
    }

    doc.driver.position.lat -= doc.driver.speed.lat
    doc.driver.position.lng -= doc.driver.speed.lng

    var distanceAfter = Math.abs(distance(doc.driver.position, doc.source));

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

function distance(from, to) {
  const vec = diffLatLong(from, to)
  return Math.sqrt(Math.pow(vec.lat, 2) + Math.pow(vec.lng, 2));
}