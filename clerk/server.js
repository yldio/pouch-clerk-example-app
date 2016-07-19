'use strict'

const PouchDB = require('pouchdb')
const PouchSync = require('pouch-websocket-sync')
const http = require('http')
const path = require('path')
const httpServer = http.createServer()
const server = PouchSync.createServer(httpServer, onRequest)
httpServer.listen(3001, onListen);

const clerk = require('./clerk');

clerk.on('error', error => console.error(error.stack))

const basePath = path.normalize(path.join(__dirname, '..', 'databases'));

function onRequest(credentials, dbName, cb) {
  console.log('new request for db %j, creds=%j', dbName, credentials)
  const dbPath = path.join(basePath, dbName)
  const db = new PouchDB(dbPath)

  if (! clerk.has(dbName)) {
    clerk.add(db, dbName)
  }
  cb(null, db)
}

function onListen() {
  console.log('Sync server listening on %j', httpServer.address())
}
