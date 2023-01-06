import React from 'react';
import ReactDOM from 'react-dom/client';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import mainReducer from './Store/reducers/index';
import 'bootstrap/dist/css/bootstrap.css';
import './Assets/styles/main.scss';
import './index.css';
import Main from './Components/Layout/Layout';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    mainReducer, 
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <Main />
    </Provider>
  </React.StrictMode>
);
