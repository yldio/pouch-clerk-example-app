'use strict';

const maxAge = 1000 * 60 * 60 // 1 hour

module.exports = {
  start: function(Doc) {
    Doc.get((err, doc) => {
      if (doc && outdated(doc)) {
        console.log('cenceling outdated doc %j', doc._id)
        doc.clerk_state.state = 'canceled'
        Doc.put(doc)
      }
    })
  },
}

function outdated(doc) {
  return doc && !doc.time || doc.time && doc.time.started && (Date.now - doc.time.started > maxAge)
}
