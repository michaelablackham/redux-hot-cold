import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
//need the provider to pass i the store to the compoenents
import {Provider} from 'react-redux';

import './reset.css';
import './index.css';

import Game from './components/game';
//import the store in to the entire app
import store from './store';

ReactDOM.render(
  //Wrap all components within a Provider
  // pass in the store prop
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
