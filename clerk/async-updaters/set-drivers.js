'use strict';

const dragonNames = require('./dragon-names');

const maxDistance = 0.05;

module.exports = {
  start: function(Doc) {
    this._interval = setInterval(_ => {
      Doc.get((err, doc) => {
        if (err) {
          handleError(err);
        } else {
          if (doc.clerk_state.state == 'searching-driver' && !(doc.drivers || []).length) {
            doc.drivers = fakeDrivers(doc.source);
            Doc.put(doc, (err) => {
              if (err) {
                handleError(err);
              }
            });
          }
        }
      })
    }, 1000);
  },

  stop: function() {
    clearInterval(this._interval);
  },
}

function fakeDrivers(pos) {
  const drivers = [];
  const driverCount = Math.floor(Math.random() * 10);
  for(let i = 1 ; i < driverCount ; i ++) {
    drivers.push(fakeDriver(pos));
  }
  return drivers;
}

function fakeDriver(pos) {
  return {
    name: randomDragonName(),
    position: {
      lat: pos.lat + randomDistance(),
      lng: pos.lng + randomDistance(),
    }
  }
}

function randomDistance() {
  return (Math.random() * maxDistance) - maxDistance / 2
}

function randomDragonName() {
  return dragonNames[Math.floor(Math.random() * dragonNames.length)];
}

function handleError(err) {
  console.error(err.stack);
}