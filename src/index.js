import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/scss/appStyles.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './store/configureStore';

ReactDOM.render(
    <App store = {store} className= "main-style"/>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
