import React from 'react';
import batmanCover from './batman.jpg';
import './App.css';


function App() {
  return (
    <div className="App">
      <img alt="batman movie cover" className="movieCover" src={batmanCover} />
    </div>
  );
}

export default App;
