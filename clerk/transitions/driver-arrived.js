// driver-arrived

module.exports = function(doc, next) {
  setTimeout(() => {
    delete doc.eta_pickup
    delete doc.driver.speed
    doc.time.pickup = Date.now()
    next(null, 'en-route')
  }, 5000)
}