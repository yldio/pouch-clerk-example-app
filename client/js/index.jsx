import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store'

const store = configureStore()

import {Router, Route, IndexRoute, browserHistory as history} from 'react-router'
import App from './components/App.jsx'
import Home from './components/Home.jsx'
import NewSession from './components/NewSession.jsx'
import NewTransaction from './components/NewTransaction.jsx'
import Transaction from './components/Transaction.jsx'

const router = (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/session/new" component={NewSession} />
      <Route path="/transactions/new" component={NewTransaction} />
      <Route path="/transactions/:id" component={Transaction} />
    </Route>
  </Router>)

render(
  (<Provider store={store}>
    {router}
  </Provider>),
  document.getElementById('root'))
