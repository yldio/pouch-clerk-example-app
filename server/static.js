'use strict';

const express = require('express')
const path = require('path')
// const compression = require('compression')

const app = express()

const base = path.join(__dirname, '..', 'client');

// use compression
// app.use(compression)

// serve our static stuff like index.css
app.use(express.static(base))

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  res.sendFile(path.join(base, 'index.html'))
})

const PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
