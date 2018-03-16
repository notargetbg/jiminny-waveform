import React from 'react';
import ReactDOM from 'react-dom';
// import Provider from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Main from './Components/Layout/Layout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
     <Main />, document.getElementById('root')
);
// ReactDOM.render(
//     <Provider store={store}>
//         <Main />
//     </Provider>, document.getElementById('root')
// );
registerServiceWorker();
