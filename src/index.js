import React from 'react';
import {render} from 'react-dom';
import 'babel-polyfill'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

render(
    <App/>,
  document.querySelector('#root'),
);

