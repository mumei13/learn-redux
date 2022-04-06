import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import { store } from './app/store'
import { Provider } from 'react-redux'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);