import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import store from "./store/store";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
