import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { legacy_createStore } from 'redux';

import {Routes,Route,BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// import CalculSimple from './Somme';
import Gere_article from './Gere_article';
import Use_effect_test from './use_effect_test';
import Fetch_data from './fetch';
import Envoyer_message from './envoyer_message';
import Game from './game';
import TicTacToeAI from './tic-tac-toe/TicTacToeAI';
import GestionLivres from './tp13';
import Axios from './axios';   
import Menu from './menu'; 
import Calculatrice from './Calculatrice';
import { Provider } from 'react-redux';
import store from './store';
import reducerArticle from './reducerArticle';
import Conteur from './conteur';
import AppArticleHook from './apparticle';
let listedebut=[
  {id : 1 , designation : "tv", prix: 3200},
  {id : 2 , designation : "psp", prix: 1000},
]
const store1=legacy_createStore(reducerArticle) 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/gere_article' element={<Gere_article T={listedebut} />} />
        <Route path='/Fetch' element={<Fetch_data />} />
        <Route path='/use_effect_test' element={<Use_effect_test />} />
        <Route path='/envoyer_message' element={ <Envoyer_message/>} />
        <Route path='/calculatrice' element={ <Calculatrice/>} />
        <Route path='/tic-tac-toe-ai' element={<TicTacToeAI />} />
        <Route path='/gestionlivre' element={<GestionLivres />} />
        <Route path='/axios' element={<Axios />} />
        <Route path='/reduxconteur' element={ <Provider store={store}><Conteur/></Provider>} />
        <Route path='/reduxarticle' element={ <Provider store={store1}><AppArticleHook/></Provider>} />
      </Routes>
  </BrowserRouter>
  
    
    
    



  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
