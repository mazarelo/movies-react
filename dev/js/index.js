import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './components/App';
import {loadSeries, getPagination} from './actions'
//import { Router, Route, browserHistory } from 'react-router'
//import { syncHistoryWithStore } from 'react-router-redux'

const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

//const history = syncHistoryWithStore(browserHistory, store)

store.dispatch(loadSeries())
store.dispatch(getPagination())

ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>,
    document.getElementById('root')
);

/*
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="foo" component={Foo}/>
    </Route>
  </Router>
*/
