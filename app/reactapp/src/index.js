import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"

import './styles/main.css';
import './styles/input.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

require('dotenv/config');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const {verify} = require('jsonwebtoken');
const {hash, compare} = require('bcryptjs');

//Register a user

//Login a user

//Logout a user

//Setup a protected route

//Get a new access token with a refresh token

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
