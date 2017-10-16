/*
import all action types from ./actions
*/
import {
  GET_INFO,
  MAKE_GUESS,
  NEW_GAME
} from './actions';

/*
create an initial state based on the original state(s)
from other files
*/
const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  correctAnswer: Math.floor(Math.random() * 100) + 1,
  showInfoModal: false
};

/*
export state based on the action being done
return original state if it didnt meet any of those actions
*/
export default (state, action) => {
  //assign state the value of the current state OR the initial state from above
  state = state || initialState;
  if (action.type === NEW_GAME) {
    //assign new content to state
    state = Object.assign(
      // creates new oboject
      {},
      // copies over all props from state
      //use initial state since this prop will not change
      initialState,
      //copies over all props from new state
      // new state will override anything in the initial state
      //not muttate state itself
      {correctAnswer: action.correntAnswer}
    );
    return state;
  }
  else if (action.type === MAKE_GUESS) {
    /* content and function taken from guess function */
    // create a const that takes in the action.guess and not just geuss
    // guess isn't being passed through here like ti was before
    const guess = parseInt(action.guess, 10);
    if (isNaN(guess)) {
        // Change out all this.setStates with object.assign\
        // this.setState({
        //     feedback: 'Please enter a valid number'
        // });
        state = Object.assign(
          //create a new Object
          {},
          // copy over all props from state
          state,
          // create new state
          feedback: 'Please enter a valid number'
        );
        return state;
    }

    // change all this.state.whatever just to state.whatever
    // const difference = Math.abs(guess - this.state.correctAnswer);
    const difference = Math.abs(guess - state.correctAnswer);

    let feedback;
    if (difference >= 50) {
        feedback = 'You\'re Ice Cold...';
    }
    else if (difference >= 30) {
        feedback = 'You\'re Cold...';
    }
    else if (difference >= 10) {
        feedback = 'You\'re Warm';
    }
    else if (difference >= 1) {
        feedback = 'You\'re Hot!';
    }
    else {
        feedback = 'You got it!';
    }

    state = Object.assign (
      // create a new object
      {},
      // copy over from state
      // use state because this area will have the most up to date answers
      state,
      // create new state
      {
        feedback,
        //take the state.guesses and add in the new action.guess
        guesses: state.guesses.concat(action.guess)
      }
    )

    return state;
  }
  else if (action.type === GET_INFO) {
    state = Object.assign (
      //create new Object
      {},
      //copy over all props from state
      initialState,
      //create new state
      {
        showInfoModel: !state.showInfoModel
      }
    );
    return state;
  }
  return state;
};
