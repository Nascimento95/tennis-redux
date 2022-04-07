import React from 'react';
import {createRoot} from "react-dom/client";
import './index.css';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import {store} from './redux/store'

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
  <React.StrictMode>
    <Home />
  </React.StrictMode>
  </Provider>,
);


