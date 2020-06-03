import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import "./index.css"
import App from './Components/app';


ReactDOM.render(
  <Router basename ="/Mini-twitter-React-app">
      <div>
        <App/>
      </div>
  </Router>,
  document.getElementById('root')
)

