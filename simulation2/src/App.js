import React, { Component } from 'react';
import router from './router'
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'

//COMPONENTS
import Header from './components/Header/Header'
import Home from './components/Home/Home'


class App extends Component {
  render() {
    return (
      <div className="App">
        {router}
      </div>
    );
  }
}

export default App;
