import React, { useState, useEffect } from "react";
// We import the useState Hook from React. It lets us keep local state in a function component.
// We import useEffect Hook to replace repetitive component lifecycle code.
import "./App.css";
import LikeButtonClass from "./LikeButtonClass";
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
  const [likeString, setLikes] = useStateWithLocalStorage("likecount", 0);
  const likes = parseInt(likeString);

  return (
    <div className="App">
      <header className="App-header">
        <img src="like-heart.png" alt="heart in a bubble" />
        <div className="buttons">
          <div className="with-hook">
            <div>
              <button classeName="hook-button" onClick={() => setLikes(likes + 1)}>I like hooks</button>
              <div>{likes}</div>
            </div>
          </div>
          <div className="with-class">
            <LikeButtonClass />
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
