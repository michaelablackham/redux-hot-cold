import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

// need to change overall piece to a function since props aren't being pass in the same way
export default function Game(props) {
// export default class Game extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         guesses: [],
    //         feedback: 'Make your guess!',
    //         correctAnswer: Math.floor(Math.random() * 100) + 1,
    //     };
    // }

    //*****
    // Move this area to actions.js
    //*****
    // newGame() {
    //     this.setState({
    //         guesses: [],
    //         feedback: 'Make your guess!',
    //         correctAnswer: Math.floor(Math.random() * 100) + 1,
    //     });
    // }

    //*****
    // Move this area to actions.js
    //*****
    // guess(guess) {
    //     guess = parseInt(guess, 10);
    //     if (isNaN(guess)) {
    //         this.setState({
    //             feedback: 'Please enter a valid number'
    //         });
    //         return;
    //     }
    //
    //     const difference = Math.abs(guess - this.state.correctAnswer);
    //
    //     let feedback;
    //     if (difference >= 50) {
    //         feedback = 'You\'re Ice Cold...';
    //     }
    //     else if (difference >= 30) {
    //         feedback = 'You\'re Cold...';
    //     }
    //     else if (difference >= 10) {
    //         feedback = 'You\'re Warm';
    //     }
    //     else if (difference >= 1) {
    //         feedback = 'You\'re Hot!';
    //     }
    //     else {
    //         feedback = 'You got it!';
    //     }
    //
    //     this.setState({
    //         feedback,
    //         guesses: [...this.state.guesses, guess]
    //     });
    // }

    //***
    // Dont need to render anything when getting passed through props
    // render() {
    return (
       <div>
          {
            // props are being passed through the store now
            //dont need to pass in all the individual props
          }
            <Header />
            <GuessSection />
            <GuessCount />
            <GuessList />
          {
            // <Header onNewGame={() => this.newGame()}/>
            // <GuessSection feedback={this.state.feedback}
            //     onGuess={(guess) => this.guess(guess)} />
            // <GuessCount count={this.state.guesses.length} />
            // <GuessList guesses={this.state.guesses} />
            }
        </div>
      );
    // };
  };
