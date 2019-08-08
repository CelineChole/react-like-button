import React, { Component } from 'react';

const LIKE_KEY = "LIKE_IN_CLASS";

class LikeButtonClass extends Component {
    constructor() {
      super()
      this.state = {
        count: 0
      }
    }

    componentDidMount(){
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
      this.setState({
        count: this.state.count + 1 
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