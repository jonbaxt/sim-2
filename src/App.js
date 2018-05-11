import React, { Component } from 'react';
import './App.css';
import Header from './component/Header/Header'
import route from './route'

class App extends Component {
  render() {
    return (
      <div className="App colLightG ">
      <div className='headerArea'>
        <Header />
      </div>
      {/* This will be routes */}
      {route}
      
      
      
      </div>
    );
  }
}

export default App;
