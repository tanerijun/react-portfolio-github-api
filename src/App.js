import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

function App() {
  const userName = 'tanerijun';

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Profile userName={userName} />} />
          <Route path="/projects" element={<Projects userName={userName} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
