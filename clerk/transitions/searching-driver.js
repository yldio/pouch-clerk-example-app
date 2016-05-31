// searching-driver

module.exports = function(doc, next) {
  setTimeout(() => {
    doc.driver = {
      name: 'Joe Driver'
    },
    next(null, 'driver assigned')
  }, 3000)
}