// driver-en-route

module.exports = function(doc, next) {
  setTimeout(() => {
    doc.driver_location = {
      'lat': doc.driver_location.lat + 0.001,
      'long': doc.driver_location.long + 0.001,
    }
    if (Date.now() - doc.time.start > 20000) {
      //  after 20 seconds, driver arrives
      doc.time.driver_arrived = Date.now()
      next(null, 'driver-arrived');
    } else {
      next(null, 'driver-en-route', true);
    }
  }, 1000)
}