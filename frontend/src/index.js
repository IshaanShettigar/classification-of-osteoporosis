import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from "./Components/Header.js"
import { Hero } from './Components/Hero.js';
import { About } from './Components/About.js';
import { Divider } from '@mui/material';
import { TryNow } from './Components/TryNow.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <About />
    <Divider variant="middle" />
    <TryNow />
  </React.StrictMode>
);


