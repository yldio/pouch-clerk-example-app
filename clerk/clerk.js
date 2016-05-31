const Clerk = require('pouch-clerk')
const transitions = require('./transitions')
const options = { transitions }

module.exports = Clerk(options)