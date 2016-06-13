const Clerk = require('pouch-clerk')
const transitions = require('./transitions')
const asyncUpdaters = require('./async-updaters')
const options = {
  transitions,
  asyncUpdaters,
  finalState: ['finished', 'canceled', 'error']
}

module.exports = Clerk(options)
