import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { Header } from './components/Global/Header';
import { Footer } from './components/Global/Footer';

export const App = (): JSX.Element => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
