import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header'
import route from './route'
import { HashRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App colLightG ">
      <div className='headerArea'>
        <Header />
      </div>
      {/* This will be routes */}
      {route}
      
      
      
      </div>
      </HashRouter>
    );
  }
}

export default App;
