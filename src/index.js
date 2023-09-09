import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Container/App';
// import App from '../src/Test/App'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

