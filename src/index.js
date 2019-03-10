import React from 'react';
import {render} from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'babel-polyfill'


render(
    <App/>,
  document.querySelector('#root'),
);

