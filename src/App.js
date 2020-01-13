import React from 'react';
import Gallery from './Gallery/Gallery';
import logo from './kodflix-logo.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      <img alt="kodflix logo" className="logo" src={logo} />
      <div className="container">
        <Gallery className="container" />
      </div>
    </div>
  );
}

export default App;