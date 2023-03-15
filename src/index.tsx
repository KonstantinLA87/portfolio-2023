import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.scss';
import App from './app/App';
import 'shared/config/i18n/i18n';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);