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
      const likes = localStorage.getItem(LIKE_KEY);

      if(!likes) {
        localStorage.setItem(LIKE_KEY, this.state.count);
      } else {
        this.setState({
          count: parseInt(likes)
        });
      }
    }

    setCount = (e) => {
      let newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
      localStorage.setItem(LIKE_KEY, newCount)
    }


  render() {
    return (
      <div>
        <button id="like-img" onClick={this.setCount}>
          <img  src="heart-like.jpg" alt="red heart" />
        </button>
          <div>Like: {this.state.count}</div>
      </div>)
  }
}

export default LikeButtonClass;