// arrived-destination

module.exports = function(doc, next) {
  setTimeout(function() {
    doc.time.end = Date.now()
    doc.time.elapsed = doc.time.end - doc.time.start
    doc.cost = {
      value: Math.floor(Math.random() * 1000) / 10,
      currency: 'GBP',
    }
    next(null, 'service-completed')
  }, 1000)
}