import React, { Component } from 'react';

class LikeButtonClass extends Component {
    constructor() {
      super()
      this.state = {
        count: 0
      }
    }

    handleLike = (e) => {
      let newCount = this.state.count + 1
      this.setState({
        count: newCount
      })
    }

  render() {
    return (
      <div>
        <button id="like-img" onClick={this.handleLike}>
          <img  src="heart-like.jpg" alt="red heart" />
        </button>
          <div>Like: {this.state.count}</div>
      </div>)
  }
}

export default LikeButtonClass;