'use strict';

exports.diffLatLong = diffLatLong;
exports.distance = distance;

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
  if (! from) {
    from = {
      lat: 0,
      lng: 0,
    }
  }
  const vec = diffLatLong(from, to)
  return Math.sqrt(Math.pow(vec.lat, 2) + Math.pow(vec.lng, 2));
}
