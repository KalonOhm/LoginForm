import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';

import LoginForm from './components/login-form';
import Navigation from './components/navigation';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginForm />
    <Navigation />
  </React.StrictMode>
);

