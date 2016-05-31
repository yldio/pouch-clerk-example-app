exports = module.exports = {};

const states = [
  'start',
  'searching-driver',
  'driver-assigned',
  'driver-en-route'
  ]

states.forEach(module => {
  const action = require('./' + module)
  exports[module] = action;
})
