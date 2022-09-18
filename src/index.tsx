import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.sass';
import axios from "axios";

axios.defaults.baseURL = 'https://ecoapp.cloud.technokratos.com/eco-rus/api/v1';

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();