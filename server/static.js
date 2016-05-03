// server.js
var express = require('express')
var path = require('path')
var compression = require('compression')

var app = express()

var base = path.join(__dirname, '..', 'client');

// use compression
app.use(compression)

// serve our static stuff like index.css
app.use(express.static(base))

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  res.sendFile(path.join(base, 'index.html'))
})

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})