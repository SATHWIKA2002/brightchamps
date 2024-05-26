import React, { Component } from 'react';

import cardImg from '../../Images/cardImg.png'
import './index.css'

class Card extends Component {
  handleClick = () => {
    this.props.onClick(this.props.card);
  };

  render() {
    const { card, isFlipped } = this.props;

    return (
      <div className="card" onClick={this.handleClick}>
        {isFlipped ? (
          <div className="card-content">{card.content}</div>
        ) : (
          <div className="card-back"><img src={cardImg} className='cardImg' alt='img' /></div>
        )}
      </div>
    );
  }
}

export default Card;