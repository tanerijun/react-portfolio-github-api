import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './pages/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Profile userName="octocat" />
      </div>
    );
  }
}

export default App;
