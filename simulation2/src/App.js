import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//COMPONENTS
import Header from './components/Header/Header'
import Home from './components/Home/Home'

class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
