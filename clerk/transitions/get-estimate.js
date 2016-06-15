// get-estimate

module.exports = function(doc, next) {
  setTimeout(_ => {
    doc.payment_methods = [
      '4211-xxxx-xxxx-xxxx-0372',
      '6321-xxxx-xxxx-xxxx-9264',
    ];

    doc.cost_estimate = {
      value: Math.floor(Math.random() * 1000) / 10,
      currency: 'GBP',
    }
    next(null, 'select-payment-method')
  }, 100);
}