import React from "react";
import "./index.css";
import App from "./App";
import { store } from "./store/index";
import { Provider } from "react-redux";
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

