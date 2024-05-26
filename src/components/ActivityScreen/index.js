import React, { Component } from 'react';
import Card from '../Card';

import './index.css'
const cardData=[
    { "id": 1, "content": "🍌" },
    { "id": 2, "content": "🍎" },
    { "id": 3, "content": "🍇" },
    { "id": 4, "content": "🍉" },
    { "id": 5, "content": "🍒" }
  ]

  class ActivityScreen extends Component {
    state = {
      cards: [],
      selectedCards: [],
      matches: 0,
      attempts: 0,
    };
  
    componentDidMount() {
      const shuffledCards = [...cardData, ...cardData].sort(() => 0.5 - Math.random());
      this.setState({ cards: shuffledCards });
    }
  
    handleCardClick = (card) => {
      const { selectedCards, matches, attempts } = this.state;
      const { setScore, setBananas, setCurrentScreen } = this.props;
  
      if (selectedCards.length < 2) {
        this.setState({ selectedCards: [...selectedCards, card] });
      }
  
      if (selectedCards.length === 1) {
        this.setState({ attempts: attempts + 1 });
  
        if (selectedCards[0].id === card.id) {
          const newMatches = matches + 1;
          this.setState({ matches: newMatches });
          setScore(newMatches * 10);
          setBananas(newMatches);
  
          this.setState({ selectedCards: [] });
  
          if (newMatches === cardData.length) {
            setCurrentScreen('final');
          }
        } else {
          setTimeout(() => {
            this.setState({ selectedCards: [] });
          }, 1000);
        }
      }
    };
  
    render() {
      const { cards, selectedCards } = this.state;
  
      return (
        <div className='activity-container'>
          <div className="card-grid">
            {cards.map((card) => (
              <Card
                key={card.id}
                card={card}
                isFlipped={selectedCards.includes(card)}
                onClick={() => this.handleCardClick(card)}
              />
            ))}
          </div>
        </div>
      );
    }
  }
  
  export default ActivityScreen;