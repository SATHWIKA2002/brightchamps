import React, { Component } from 'react';

import IntroScreen from './components/IntroScreen';
import InstructionScreen from './components/InstructionScreen';
import ActivityScreen from './components/ActivityScreen';
import FinalScreen from './components/FinalScreen';

import './App.css';

class App extends Component {
  state = {
    currentScreen: 'intro',
    score: 0,
    bananas: 0,
  };

  setCurrentScreen = (screen) => {
    this.setState({ currentScreen: screen });
  };

  setScore = (score) => {
    this.setState({ score });
  };

  setBananas = (bananas) => {
    this.setState({ bananas });
  };

  renderScreen = () => {
    const { currentScreen, score, bananas } = this.state;
    switch (currentScreen) {
      case 'intro':
        return <IntroScreen setCurrentScreen={this.setCurrentScreen} />;
      case 'instructions':
        return <InstructionScreen setCurrentScreen={this.setCurrentScreen} />;
      case 'activity':
        return (
          <ActivityScreen
            setCurrentScreen={this.setCurrentScreen}
            setScore={this.setScore}
            setBananas={this.setBananas}
          />
        );
      case 'final':
        return <FinalScreen score={score} bananas={bananas} />;
      default:
        return <IntroScreen setCurrentScreen={this.setCurrentScreen} />;
    }
  };

  render() {
    return (
      <div className="App">
       
        {this.renderScreen()}
        
      </div>
    );
  }
}

export default App;
