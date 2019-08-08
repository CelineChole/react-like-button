import React, { useState, useEffect } from "react";
// We import the useState Hook from React. It lets us keep local state in a function component.
// We import useEffect Hook to replace repetitive component lifecycle code.
import "./App.css";
import LikeButtonClass from "./LikeButtonClass";

const useStateWithLocalStorage = (localStorageKey, defaultValue) => {
   // Similar to useState but first arg is key to the value in local storage.
   // If we don't pass a defaultValue, the first time the page load, the count of likes value is NaN
  const [count, setCount] = useState(
    // If I have a count in the local storage retrieve it otherwise use the default value
    // Value in local storage is a string: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
    localStorage.getItem(localStorageKey) || defaultValue
  );

  // you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined
  // UseEffect runs both after the first render and after every update.
  // In some cases, applying the effect after every render might create a performance problem.
  // This requirement is common enough that it is built into the useEffect Hook API. 
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. 
  // To do so, pass an array as an optional second argument to useEffect, here '[count]'
  useEffect(() => {
    localStorage.setItem(localStorageKey, count);
  }, [count]);

  return [count, setCount];
};

const App = () => {
  const [likeString, setLikes] = useStateWithLocalStorage("LIKE_IN_HOOK", 0);
  const likes = parseInt(likeString);

  return (
    <div className="App">
      <header className="App-header">
        <img src="like-heart.png" alt="heart in a bubble" />
        <div className="buttons">
          <div className="with-hook">
            <div>
              <button className="hook-button" onClick={() => setLikes(likes + 1)}>I like hooks</button>
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
