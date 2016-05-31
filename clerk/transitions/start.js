// start

module.exports = function(doc, next) {
  doc.time = {
    start: Date.now(),
  }
  next(null, 'searching-driver')
}