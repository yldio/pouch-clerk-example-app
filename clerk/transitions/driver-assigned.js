// driver-assigned

module.exports = function(doc, next) {
  setTimeout(() => {
    doc.driver_location = {
      'lat': 51.5074,
      'long': 0.1278,
    }
    next(null, 'driver-en-route')
  }, 3000)
}