import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Header from './layout/Header';
import HomePage from './layout/HomePage';
import NotFound from './layout/NotFound';

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;