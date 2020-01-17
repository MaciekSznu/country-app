import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import { getCountries } from '../src/actions/actions-countries';
import DevTools from './DevTools';
import routes from './routes';

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes}>
      <DevTools />
    </Router>
  </Provider>,
  document.getElementById('root')
);

store.dispatch(getCountries());
