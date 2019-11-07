import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA6zBVnlAtngdmKBHPColrHSCAgwhm_HbI",
    authDomain: "raspberry-pi-data-analytics.firebaseapp.com",
    databaseURL: "https://raspberry-pi-data-analytics.firebaseio.com",
    projectId: "raspberry-pi-data-analytics",
    storageBucket: "raspberry-pi-data-analytics.appspot.com",
    messagingSenderId: "161315917592",
    appId: "1:161315917592:web:00cc58c6c9d6580f6a186d",
    measurementId: "G-14VSFT2TXY"
  };

  firebase.initalizeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
