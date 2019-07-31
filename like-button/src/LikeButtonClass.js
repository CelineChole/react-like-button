import React, { Component } from 'react';

class LikeButtonClass extends Component {
    constructor() {
      super()
      this.state = {
        likeCounter: 0
      }
    }

    handleLike = (e) => {
      let newLikeCounter = this.state.likeCounter + 1
      this.setState({
        likeCounter: newLikeCounter
      })
    }

  render() {
    return (
      <div>
        <button id="like-img" onClick={this.handleLike}>
          <img  src="heart-like.jpg" alt="red heart" />
        </button>
          <div>Like: {this.state.likeCounter}</div>
      </div>)
  }
}

export default LikeButtonClass;