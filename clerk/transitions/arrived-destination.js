// arrived-destination

module.exports = function(doc, next) {
  setTimeout(function() {
    doc.time.end = Date.now()
    doc.time.elapsed = doc.time.end - doc.time.start
    next(null, 'service-completed')
  }, 5000)
}