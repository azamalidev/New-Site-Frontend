// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';  // Make sure the store path is correct
import './index.css'; // Import the Tailwind CSS file here

import App from './App';

ReactDOM.render(
  <Provider store={store}>  {/* Wrapping App with Redux Provider */}
    <App />
  </Provider>,
  document.getElementById('root')
);
