
import React, { Component } from 'react';
import monkeyImg from '../../Images/monkeyImg.png'
import './index.css'

class InstructionScreen extends Component {
  handleNextClick = () => {
    this.props.setCurrentScreen('activity');
  };

  render() {
    return (
      <div className='container'>
        <h1 className='heading'>Game Instructions</h1>
        <p>Match the cards to collect bananas!</p>
        <img src={monkeyImg} className='monkeyImg' alt='img'/>
        <button className='NextButton' onClick={this.handleNextClick}>Next</button>
      </div>
    );
  }
}

export default InstructionScreen;