import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Started from './components/getStarted/Started';
import Contact from './components/contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' Component={App} />
      <Route path='/login' Component={Login} />
      <Route path='/started' Component={Started} />
      <Route path='/contact' Component={Contact} />
    </Routes>
  </BrowserRouter>
);