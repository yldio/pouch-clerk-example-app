import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store'

const store = configureStore()

import {Router, Route, hashHistory} from 'react-router'
import App from './components/App.jsx'
import NewSession from './components/NewSession.jsx'

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/session/new" component={NewSession} />
    </Route>
  </Router>)

render(
  (<Provider store={store}>
    {router}
  </Provider>),
  document.getElementById('root'))
