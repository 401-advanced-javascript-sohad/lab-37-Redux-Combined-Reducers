/* eslint-disable no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app.js';

import store from './store/index.js';
console.log('sooohhhhhhaddd');

function Main() {

  return (
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));