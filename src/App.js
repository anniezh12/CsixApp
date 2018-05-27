import React, { Component } from 'react';
import Home from './statelesscomponents/mainpage.js';
import Navbar from './statelesscomponents/navbar.js';

class App extends Component {
  render() {
    return (
      <div>
         <Navbar/>
         <Home/>
   </div>
    );
  }
}

export default App;
