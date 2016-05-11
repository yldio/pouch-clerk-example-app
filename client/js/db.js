import PouchDB from 'pouchdb'

const databases = {};

export function get(databaseName) {
  var database = databases[databaseName]
  if (! database) {
    database = databases[databaseName] = new PouchDB(databaseName)
  }
  return database;
}