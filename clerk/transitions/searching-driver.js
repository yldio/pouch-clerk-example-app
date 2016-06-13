// searching-driver

module.exports = function(doc, next) {
  console.log('searching driver...');
  setTimeout(() => {
    if (doc.drivers && doc.drivers.length) {
      doc.driver = doc.drivers[Math.floor(Math.random() * doc.drivers.length)];
      next(null, 'driver-assigned')
    } else {
      next(null, 'searching-driver', true);
    }
  }, 10000)
}