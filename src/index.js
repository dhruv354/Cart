import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase'
import 'firebase/firestore'
// import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyAOwjEY1QCtAWFPz2TARambbYaStmdf7H0",
  authDomain: "cart-6acad.firebaseapp.com",
  projectId: "cart-6acad",
  storageBucket: "cart-6acad.appspot.com",
  messagingSenderId: "360970151079",
  appId: "1:360970151079:web:eb0bed6810819907bfe782"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


