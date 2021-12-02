import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { Header } from './components/Global/Header';
import { Footer } from './components/Global/Footer';
import { Courses } from './pages/Courses';
import { Trainers } from './pages/Trainers';
import { Events } from './pages/Events';
import { Publications } from './pages/Publications';
import { Contact } from './pages/Contact';
import { About } from './pages/About';

export const App = (): JSX.Element => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/trainers" element={<Trainers />} />
      <Route path="/events" element={<Events />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
