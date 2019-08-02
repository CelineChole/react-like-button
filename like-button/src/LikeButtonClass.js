import React, { Component } from 'react';

const LIKE_KEY = "LIKE_IN_CLASS";

class LikeButtonClass extends Component {
    constructor() {
      super()
      this.state = {
        count: 0
      }
    }

    componentDidMount = () => {
      // local storage works like a dictionary with key / values
      const likes = localStorage.getItem(LIKE_KEY);
      // if there is no likes in the local storage we set the count to 0
      if(!likes) {
        localStorage.setItem(LIKE_KEY, this.state.count);
      } else {
        // otherwise we set the state with the likes from local storage
        this.setState({
          count: parseInt(likes)
        });
      }
    }

    setCount = (e) => {
      // setState is an async function. 
      // React may batch a bunch of setStates together. 
      // So the value of this.state.count is the value at the time you make the request.
      this.setState((prevState, props) => ({
        count: prevState.count + 1
    })); 
      let newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
      localStorage.setItem(LIKE_KEY, newCount)
    }


  render() {
    return (
      <div>
        <button id="like-img" onClick={this.setCount}>I like classes</button>
          <div>{this.state.count}</div>
      </div>)
  }
}

export default LikeButtonClass;