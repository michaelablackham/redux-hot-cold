/*
[] Make a Guess
[] Get info
[] New Game
*/

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guess) => ({
  type: MAKE_GUESS,
  // [whatever gets passed into function]
  // [or whatever function needs to happen]
  // pass in the guess made by the user
  guess
});

export const GET_INFO = 'GET_INFO';
export const getInfo = () => ({
  type: GET_INFO,
  // [whatever gets passed into function]
  // [or whatever function needs to happen]
});

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
  type: NEW_GAME,
  // [whatever gets passed into function]
  // [or whatever function needs to happen]
  feedback: 'Make your guess!',
  correctAnswer: Math.floor(Math.random() * 100) + 1
});
