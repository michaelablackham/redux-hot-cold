import {createStore} from 'redux';

// import reducer to interact with the store
import reducer from './reducer';

//create a store using the createStore method telling it to
// use reduce to hande any actions that are dispatched
export default createStore(reducer);
