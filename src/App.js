import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Profile from './pages/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Profile userName="octocat" />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
