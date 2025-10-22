import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import CangeNom from './Nom';
import Livre from './Livers'
import LivresAll from './LivresAll';
import L from "./L_iver"
import reportWebVitals from './reportWebVitals';
import ComposantState from './ComposantState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CangeNom />
    <Livre id='1' titre='abc' prix='110' />
    <LivresAll T={L} />
    <ComposantState/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
