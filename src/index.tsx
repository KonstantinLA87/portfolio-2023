import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.css';
import App from './app/App';
import 'shared/config/i18n/i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);