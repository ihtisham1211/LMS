import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
