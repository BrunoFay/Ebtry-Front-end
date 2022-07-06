import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import CardContextProvider from './context/CardContextProvider';
import UserContextProvider from './context/UserContextProvider';
import './global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <CardContextProvider>
          <App />
        </CardContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
