import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Nav} from "./components/nav/nav"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/dashboard/dashboard';
import { Users } from './pages/dashboard/users/users';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/users" element={<Users/>}></Route>
    </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);
