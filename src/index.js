import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Nav} from "./components/nav/nav"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/dashboard/dashboard';
import { Users } from './pages/dashboard/users/users';
import { NewsDetails } from './pages/newsDetails/newsDetails';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>

    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/users" element={<Users/>}></Route>
      <Route path="/news/:slug" element={<NewsDetails/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </ThemeProvider>
  </React.StrictMode>
);
