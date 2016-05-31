// service-completed

module.exports = function(doc, next) {
  setTimeout(function() {
    doc.cost = {
      value: Math.floor(Math.random() * 1000) / 10,
      currency: 'GBP',
    }
    next(null, 'finished')
  }, 5000)
}