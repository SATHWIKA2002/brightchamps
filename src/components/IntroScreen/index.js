
import React, { Component } from 'react';
import monkeyImg from '../../Images/monkeyImg.png'
import './index.css'

class IntroScreen extends Component {
  handleStartClick = () => {
    this.props.setCurrentScreen('instructions');
  };

  render() {
    return (
      <div className='container'>
       
        <h1 className='heading'>Welcome to the Matching Game!</h1>
        <img src={monkeyImg} className='monkeyImg' alt='img'/>
        <button className='start-button' onClick={this.handleStartClick}>Start</button>
      </div>
    );
  }
}

export default IntroScreen;