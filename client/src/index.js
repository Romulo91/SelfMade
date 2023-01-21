import React from 'react';
import ReactDOM from 'react-dom/client';

import './style.scss';
import 'bootstrap/dist/css/bootstrap.css';
import './utils_css/_vars.scss';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import App from './component/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
