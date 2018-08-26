import React from 'react';
const ReactDOM = require('react-dom');
import App from './app.jsx';
import './../node_modules/bootstrap3/dist/css/bootstrap.min.css';


ReactDOM.render(<App hashTag="#react_quickly" />, document.getElementById('content'));