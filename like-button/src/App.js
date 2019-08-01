import React, { useState, useEffect } from 'react';
import './App.css';
import LikeButtonClass from './LikeButtonClass'
// import LikeButtonFunc from './LikeButtonFunc'

const useStateWithLocalStorage = (localStorageKey, defaultValue) => {
  const [value, setValue] = useState(
    localStorage.getItem(localStorageKey) || defaultValue
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value, setValue];
};

const App = () => {
  const [likeString, setLikes] = useStateWithLocalStorage("likecount", -1);
  const likes = parseInt(likeString);

  return (
    <div className="App">
      <header className="App-header">
       <img src="like-heart.png" alt="heart in a bubble" />
        <button onClick={() => setLikes(likes + 1)}>Like!</button>
        <div>{likes}</div>
      </header>







      <LikeButtonClass />
      {/* <LikeButtonFunc /> */}
    </div>
  );
}

export default App;
