import React from 'react';
import ReactDOM from 'react-dom';
import './core/index.css';
import App from './core/App';
import * as serviceWorker from './core/serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'; //import aqui para toda aplicação receber os parametros do bootstrap

// O nosso index vai então invocar a nossa App
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
