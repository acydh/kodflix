import React from 'react';
import logo from './kodflix-logo.png';
import './App.css';
import './reset.css';
import batmanCover from './batman.jpg';
import avatarCover from './avatar.jpg';
import johnnyMnemonicCover from './johnnymnemonic.jpg';
import matrixCover from './matrix.jpg';
import thewalkingdeadCover from './thewalkingdead.jpg';
import gameofthronesCover from './gameofthrones.jpg';


function App() {
  return (
    <div className="App">
      <img alt="kodflix logo" className="logo" src={logo} />
      <div className="container">
        <div className="movieCover"><img src={batmanCover} /></div>
        <div className="movieCover"><img src={avatarCover} /></div>
        <div className="movieCover"><img src={johnnyMnemonicCover} /></div>
      </div>
      <div className="container">
        <div className="movieCover"><img src={matrixCover} /></div>
        <div className="movieCover"><img src={thewalkingdeadCover} /></div>
        <div className="movieCover"><img src={gameofthronesCover} /></div>
      </div>
    </div>
  );
}

export default App;