import React, { Component } from 'react';

import './index.css'

class FinalScreen extends Component {
  handlePlayAgainClick = () => {
    window.location.reload();
  };

  render() {
    const { score, bananas } = this.props;

    return (
      <div className='final-container'>
        <div className='card-final-container'>
        <h1>Game Over!</h1>
        <p className='score'>Your Score: {score}</p>
        <p className='score'>Bananas Collected: {bananas}</p>
        <button className='NextButton' onClick={this.handlePlayAgainClick}>Play Again</button>
        </div>
      </div>
    );
  }
}

export default FinalScreen;
