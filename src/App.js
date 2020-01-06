import React from 'react';
import logo from './kodflix-logo.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <img alt="kodflix logo" className="logo" src={logo} />
      <div className="container">
        <div className="movieCover">Batman</div>
        <div className="movieCover">Avatar</div>
        <div className="movieCover">Johnny Mnemonic</div>
      </div>
      <div className="container">
        <div className="movieCover">Matrix</div>
        <div className="movieCover">The Walking Dead</div>
        <div className="movieCover">Game of Thrones</div>
      </div>
    </div>
  );
}

export default App;
