// en-route

module.exports = function(doc, next) {
  setTimeout(() => {
    doc.driver_location = {
      'lat': doc.driver_location.lat + 0.001,
      'long': doc.driver_location.long + 0.001,
    }
    if (Date.now() - doc.time.start > 40000) {
      //  after 40 seconds, driver arrives to destination
      doc.time.arrived_destination = Date.now()
      next(null, 'arrived-destination');
    } else {
      next(null, 'en-route', true);
    }
  }, 5000)
}