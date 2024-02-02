import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// const vdom = document.getElementById('root');
// const root = ReactDOM.createRoot(vdom);

const root = ReactDOM.createRoot(document.getElementById('root')); // 가상 DOM 의 구현 내용

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

);
