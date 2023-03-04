import React from 'react';
import ReactDOM from 'react-dom/client';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import mainReducer from './Store/reducers/main';
import Layout from './Components/Layout/Layout';

import 'bootstrap/dist/css/bootstrap.css';
import './Assets/styles/main.scss';
import './index.css';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    mainReducer, 
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

const el = document.getElementById('root') || document.createElement('div');

const root = ReactDOM.createRoot(el);
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <Layout />
      </Provider>
  </React.StrictMode>
);
