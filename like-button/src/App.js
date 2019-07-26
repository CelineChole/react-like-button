import React from 'react';
import logo from './logo.svg';
import './App.css';
import LikeButton from './LikeButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <img src="like-heart.png" />
      </header>
      <LikeButton />
    </div>
  );
}

export default App;
