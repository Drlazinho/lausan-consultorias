import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStlyes from './globalStyles/globalStlyes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStlyes/>
    <App />
  </React.StrictMode>
);

