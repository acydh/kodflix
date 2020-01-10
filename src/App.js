import React from 'react';
import Poster from './Poster/Poster';
import logo from './kodflix-logo.png';
import './App.scss';
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
        <Poster coverImg={batmanCover} title="Batman" />
        <Poster coverImg={avatarCover} title="Avatar" />
        <Poster coverImg={johnnyMnemonicCover} title="Johnny Mnemonic" />
      </div>
      <div className="container">
        <Poster coverImg={matrixCover} title="Matrix" />
        <Poster coverImg={thewalkingdeadCover} title="The Walking Dead" />
        <Poster coverImg={gameofthronesCover} title="Game of Thrones" />
      </div>
    </div>
  );
}

export default App;