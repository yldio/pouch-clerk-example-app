exports = module.exports = {};

const states = [
  'get-estimate',
  'searching-driver',
  'driver-assigned',
  'driver-en-route',
  'driver-arrived',
  'en-route',
  'arrived-destination',
  ]

states.forEach(module => {
  const action = require('./' + module)
  exports[module] = action;
})
