import React from 'react';
import logo from './kodflix-logo.png';
import './reset.css';
import './App.css';
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
        <div className="movieCover"><img src={batmanCover} alt="batman cover" />
          <div className="textOverlay"><span>Batman</span></div>
        </div>
        <div className="movieCover"><img src={avatarCover} alt="avatar cover" />
          <div className="textOverlay"><span>Avatar</span></div>
        </div>
        <div className="movieCover"><img src={johnnyMnemonicCover} alt="jonnymnemonic cover" />
          <div className="textOverlay"><span>Johnny Mnemonic</span></div>
        </div>
      </div>
      <div className="container">
        <div className="movieCover"><img src={matrixCover} alt="matrix cover" />
          <div className="textOverlay"><span>Matrix</span></div>
        </div>
        <div className="movieCover"><img src={thewalkingdeadCover} alt="the walking dead cover" />
          <div className="textOverlay"><span>The Walking Dead</span></div>
        </div>
        <div className="movieCover"><img src={gameofthronesCover} alt="game of thrones cover" />
          <div className="textOverlay"><span>Game of Thrones</span></div>
        </div>
      </div>
    </div>
  );
}

export default App;