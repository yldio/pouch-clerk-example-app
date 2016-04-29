import {render} from 'react-dom'
import {Provider} from 'react-redux'
import Router from 'react-router'
import getRoutes from './routes/index.jsx'
import configureStore from './store'

const store = configureStore()

const router = (
  <Router>
    {getRoutes(store)}
  </Router>)

render(
  <Provider store={store}>
    {router}
  </Provider>)
