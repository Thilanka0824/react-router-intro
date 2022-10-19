import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//import App from './App';         
import Home from './Pages/Home';
import About from './Pages/About';                
import Contact from './Pages/Contact';
import Logger from './Pages/Login';
//import NavBar from './components/NavBar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Logger/>
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

