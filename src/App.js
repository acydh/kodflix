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

function TvShow(props) {
  return (
    <div className="movieCover"><img src={props.coverImg} alt={props.title} />
        <div className="textOverlay"><span>{props.title}</span></div>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <img alt="kodflix logo" className="logo" src={logo} />
      <div className="container">
        <TvShow coverImg = {batmanCover} title = "Batman"  />
        <TvShow coverImg = {avatarCover} title = "Avatar"  />
        <TvShow coverImg = {johnnyMnemonicCover} title = "Johnny Mnemonic"  />  
      </div>      
      <div className="container">
        <TvShow coverImg = {matrixCover} title = "Matrix"  />
        <TvShow coverImg = {thewalkingdeadCover} title = "The Walking Dead"  />
        <TvShow coverImg = {gameofthronesCover} title = "Game of Thrones"  />        
      </div>
    </div>
  );
}

export default App;