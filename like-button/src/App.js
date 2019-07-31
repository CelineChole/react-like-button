import React from 'react';
import './App.css';
import LikeButtonClass from './LikeButtonClass'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <img src="like-heart.png" alt="heart in a bubble" />
      </header>
      <LikeButtonClass />
    </div>
  );
}

export default App;
