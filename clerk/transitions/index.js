exports = module.exports = {};

const states = [
  'start',
  'searching-driver',
  'driver-assigned',
  'driver-en-route',
  'driver-arrived',
  'en-route',
  'arrived-destination',
  'service-completed',
  ]

states.forEach(module => {
  const action = require('./' + module)
  exports[module] = action;
})
