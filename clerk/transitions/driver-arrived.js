// driver-arrived

module.exports = function(doc, next) {
  setTimeout(() => {
    doc.time.pickup = Date.now();
    next(null, 'en-route');
  }, 5000)
}