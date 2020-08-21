import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../src/App'
import registerServiceWorker from './registerServiceWorker';
import { BASE_URL } from './utils/constant';
import { Provider } from 'react-redux';
import store from './store';

axios.defaults.baseURL = BASE_URL;
ReactDOM.render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>
  ,document.getElementById('root')
);

registerServiceWorker();