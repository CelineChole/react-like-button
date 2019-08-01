import React, { useState } from 'react';
// We import the useState Hook from React. It lets us keep local state in a function component.

const LikeButtonFunc = () => {
  const [count, setCount] =  useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
};

export default LikeButtonFunc;