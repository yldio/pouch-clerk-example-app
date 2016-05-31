// searching-driver

module.exports = function(doc, next) {
  setTimeout(() => {
    doc.driver = {
      'name': 'Joe Driver',
      'license-plate': 'DG 532S BI',
    },
    next(null, 'driver-assigned')
  }, 5000)
}