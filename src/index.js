import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/fonts.css';
import './styles/reset.css';
import './styles/modules.css';
import './styles/layout.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);