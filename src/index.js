import React from 'react';
import { createRoot, Switch } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import './css/app.css'
import './css/body.css'
import './css/header.css'

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App id='#app' />
  </React.StrictMode>
);
