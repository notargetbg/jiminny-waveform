import React, { Component } from 'react';
import logo from '../../Assets/logo-jiminny.png';
import './layout.css';

class App extends Component {
  render() {
    return (
      <div>
        <img className="logo" src={logo} alt=""/>
        <h2>TEST APP</h2>
      </div>
    );
  }
}

export default App;