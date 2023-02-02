import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Imgsavegpt from './imgsavegpt';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Imgsavegpt/> */}
  </React.StrictMode>
);

reportWebVitals();
