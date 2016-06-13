// driver-assigned

module.exports = function(doc, next) {
  doc.drivers = [];
  next(null, 'driver-en-route')
}