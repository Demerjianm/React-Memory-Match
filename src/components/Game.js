import React, { Component } from 'react';
import Board from './Board';
import Card from './Card'

class Game extends Component {
  // Match Icons: fa-bug, fa-bolt, fa-cloud-upload, fa-cloud-download

  cards = [
    { flipped: false, matched: false, icon: 'fa-bug'},
    { flipped: false, matched: false, icon: 'fa-bolt'},
    { flipped: false, matched: false, icon: 'fa-bug'},
    { flipped: false, matched: false, icon: 'fa-bolt'},
    { flipped: false, matched: false, icon: 'fa-cloud-upload'},
    { flipped: false, matched: false, icon: 'fa-cloud-download'},
    { flipped: false, matched: false, icon: 'fa-cloud-upload'},
    { flipped: false, matched: false, icon: 'fa-cloud-download'}
  ]
//use flippedCardindexes to check how many cards are flipped
//use matchedcardindexes to check if count === 8 || this.state.cards.length
  state = { cards: this.cards, flippedCardIndexes: [], matchedCardIndexes: [] };

  // What lifecycle method could we use each time the components state is updated to check for gameOver
  //didUpdate


  // figure out how to end the game once all cards are matched this probably requires more state or a lifecycle method that loops card state
  // figure out how to start a new game
  // figure out how to change the players username while in the game

  // BONUS
  // implement a game timer and save fastest times
  // integrate this project into an express app and store this info to a database

  updateCard = (cardIndex, flipped = false, matched = false) => {
    let cards = this.state.cards.map( (card, loopIndex) => {
      if(cardIndex === loopIndex)
        return { ...card, flipped: !flipped, matched };
      else
        return card;
    })
    this.setState({ cards });
  }

  render(){
    console.log(this.state.cards)
    let { username, gameStarted, gameOver, flipped, icon } = this.state;
    //if(flipped === true)
    //  return <i className={`fa ${icon} fa-5x`} />

    return(
      <div className='container'>
        <h1 className='text-center'>React Memory Match</h1>
        <h4>Current Player: { username }</h4>
        <Board cards={ this.state.cards } updateCard={ this.updateCard }  />

      </div>
    );
  }
}

export default Game;
