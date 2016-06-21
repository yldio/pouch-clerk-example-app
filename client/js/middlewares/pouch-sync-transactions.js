'use strict'

import PouchSync from 'pouch-websocket-sync'
import PouchMiddleware from 'pouch-redux-middleware'
import ReduxReplaceableMiddleware from 'redux-replaceable-middleware'
import {get as DB} from '../db';
import * as types from '../constants/ActionTypes'

const syncEvents = ['change', 'paused', 'active', 'denied', 'complete', 'error'];
const clientEvents = ['connect', 'disconnect', 'reconnect'];

export default function(session) {
  var sync
  var syncClient
  var replaceableMiddleware = ReduxReplaceableMiddleware();

  session.on('new', function(user) {
    const dbName = user + '-transactions';
    const db = DB(dbName)

    replaceableMiddleware.replaceBy(PouchMiddleware({
      path: '/transactions',
      db,
      actions: {
        remove: doc => replaceableMiddleware.options.dispatch({type: types.DELETE_TRANSACTION, id: doc._id}),
        insert: doc => replaceableMiddleware.options.dispatch({type: types.INSERT_TRANSACTION, transaction: doc}),
        update: doc => replaceableMiddleware.options.dispatch({type: types.UPDATE_TRANSACTION, transaction: doc}),
      },
    }))

    syncClient = PouchSync.createClient()

    sync = syncClient.
      connect('ws://localhost:3001').
      on('error', function(err) {
        console.log(err);
      }).
      sync(db, {
        remoteName: dbName,
      })

    syncEvents.forEach(function(event) {
      sync.on(event, function() {
        replaceableMiddleware.options.dispatch({type: types.SET_SYNC_STATE, sync: event})
      })
    })

    sync.on('error', err => console.log(err))

    clientEvents.forEach(function(event) {
      syncClient.on(event, function() {
        replaceableMiddleware.options.dispatch({type: types.SET_SYNC_STATE, client: event})
      })
    })
  })

  session.on('delete', function(user) {
    sync.cancel();
    syncClient.destroy();
  })

  return replaceableMiddleware;
}
