import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Pagebody from './components/Pagebody';
import './App.css';

class App extends Component {
  render() {
    return (
<div>
<Navbar/>
<Pagebody/>
</div>
      );
  }
}

export default App;
